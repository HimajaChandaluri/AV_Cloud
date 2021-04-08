const auth = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.get("/me", auth, async (req, res) => {
  console.log("req.user: ", req.user, " req.user._id: ", req.user._id);
  const user = await User.findById(req.user._id);
  res.send(_.pick(user, "_id", "name", "email", "isAdmin"));
});

router.post("/", async (req, res) => {
  console.log("req.body: ", _.pick(req.body, ["name", "email", "password"]));
  const result = User.validate(_.pick(req.body, ["name", "email", "password"]));
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  let user = await User.findIfEmailExists(req.body.email);
  if (user) return res.status(400).send("Email already exists");

  const { name, email, password } = req.body;

  //   user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  const encPassword = await bcrypt.hash(password, salt);

  user = await User.addNew(name, email, encPassword);
  const { _id, isAdmin } = user;
  const token = User.generateAuthToken(_id, name, email, isAdmin);

  console.log("Sending response...");
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
