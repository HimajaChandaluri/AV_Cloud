const auth = require("../middleware/auth");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const { UserSubscription } = require("../models/userSubscription");

router.get("/me", auth, async (req, res) => {
  console.log("req.user: ", req.user, " req.user.email: ", req.user.email);
  const user = await User.findByEmail(req.user.email);
  res.send(_.pick(user, "_id", "name", "email", "isAdmin"));
});

router.get("/plan", auth, async (req, res) => {
  const plan = await UserSubscription.getMySubscriptions(req.user.email);
  console.log("PLAN:", plan);
  res.send(plan);
});

router.post("/plan", auth, async (req, res) => {
  const result = UserSubscription.validate({
    email: req.user.email,
    ..._.pick(req.body, [
      "startDate",
      "endDate",
      "amount",
      "paymentType",
      "tag",
    ]),
  });
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const plan = await UserSubscription.addNewSubscription({
    email: req.user.email,
    ..._.pick(req.body, [
      "startDate",
      "endDate",
      "amount",
      "paymentType",
      "tag",
    ]),
  });
  if (plan) res.status(200).send(plan);
});

router.post("/", async (req, res) => {
  console.log("req.body: ", _.pick(req.body, ["name", "email", "password"]));
  const result = User.validate(_.pick(req.body, ["name", "email", "password"]));
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  let user = await User.findByEmail(req.body.email);
  if (user) return res.status(400).send("Email already exists");

  const { name, email, password } = req.body;

  //   user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  const encPassword = await bcrypt.hash(password, salt);

  user = await User.addNew(name, email, encPassword);
  const { isAdmin } = user;
  const token = User.generateAuthToken(name, email, isAdmin);

  console.log("Sending response...", token);
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["name", "email"]));
});

module.exports = router;
