const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const router = express.Router();

const { AV } = require("../models/av");

router.get("/numberOfAVs", auth, admin, async (req, res) => {
  const count = await AV.getCount();
  res.send({ count: count });
});

router.get("/statesOfAVs", auth, admin, async (req, res) => {
  const avStates = await AV.getStatesAndNumbers();
  res.send(avStates);
});

module.exports = router;
