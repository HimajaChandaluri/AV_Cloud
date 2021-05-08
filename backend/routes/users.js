const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");
const { UserSubscription } = require("../models/userSubscription");
const { VehicleList } = require("../models/vehicles");

router.get("/me", auth, async (req, res) => {
  console.log("req.user: ", req.user, " req.user.email: ", req.user.email);
  const user = await User.findByEmail(req.user.email);
  // console.log(
  //   "Response User is : ",
  //   _.pick(user.data, "id", "name", "username")
  // );
  // res.send(_.pick(user.data, "id", "name", "username"));
  res.send(_.pick(user, "_id", "name", "email", "isadmin"));
});

router.get("/plan", auth, async (req, res) => {
  const plan = await UserSubscription.getMySubscriptions(req.user.email);
  console.log("PLAN:", plan);
  res.send(plan);
});

router.get("/numberOfUsers", auth, admin, async (req, res) => {
  const count = await User.getCount();
  res.send({ count: count });
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

// added
router.post("/myVehicles", auth, async (req, res) => {
  console.log(
    "req.body: ",
    _.pick(req.body, [
      "vId",
      "vColor",
      "vMake",
      "vModel",
      "vMileage",
      "vPspace",
    ])
  );

  let user = await VehicleList.getVehicles(req.user.email);
  console.log("THIS IS ADDED LOG: ", user);

  const task_names = user.map(function (task) {
    return task.vId;
  });

  var n = task_names.includes(req.body.vId);

  if (n) return res.status(400).send("ID already exists");

  const plan = await VehicleList.addVehicle({
    email: req.user.email,
    ..._.pick(req.body, [
      "vId",
      "vColor",
      "vMake",
      "vModel",
      "vMileage",
      "vPspace",
    ]),
  });
  if (plan) res.status(200).send(plan);
});

router.post("/scheduleRide", auth, async (req, res) => {
  console.log(
    "req.body: ",
    _.pick(req.body, ["vId", "Origin", "Passengers", "Destination"])
  );

  let user = await VehicleList.getVehicles(req.user.email);
  console.log("THIS IS ADDED LOG: ", user);

  const task_names = user.map(function (task) {
    return task.vId;
  });
  console.log("THIS IS ADDED: ", task_names);
  var n = task_names.includes(req.body.vId);

  if (!n) return res.status(400).send("Vehicle ID Dosent Exist");

  const plan = await VehicleList.scheduleRide({
    email: req.user.email,
    ..._.pick(req.body, ["vId", "Origin", "Passengers", "Destination"]),
  });
  if (plan) res.status(200).send(plan);
});

router.get("/myVehicles", auth, async (req, res) => {
  const plan = await VehicleList.getVehicles(req.user.email);
  console.log("PLAN1:", plan);
  res.send(plan);
});

router.get("/myRides", auth, async (req, res) => {
  const plan = await VehicleList.getRides(req.user.email);
  console.log("PLAN2:", plan);
  res.send(plan);
});

// added
router.delete("/deleteVehicles", auth, async (req, res) => {
  console.log("req" , req);
  const plan = await VehicleList.deleteVehicle(req.body.vId);
  console.log("PLAN2:", plan);
  res.send(plan);
});

router.post("/", async (req, res) => {
  console.log("req.body: ", _.pick(req.body, ["name", "email", "password"]));
  const result = User.validate(_.pick(req.body, ["name", "email", "password"]));
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  let user = await User.findByEmail(req.body.email);
  // console.log("IF USER EXISTS: ", user, " Leng: ", user.length);
  if (user.length > 0) return res.status(400).send("Email already exists");

  const { name, email, password } = req.body;

  //   user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  const encPassword = await bcrypt.hash(password, salt);

  user = await User.addNew(name, email, encPassword);
  // console.log("USER: ", userObj);

  const { isadmin } = user;
  const token = User.generateAuthToken(name, email, isadmin);

  console.log("Sending response...", token);
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["name", "email"]));
});

module.exports = router;
