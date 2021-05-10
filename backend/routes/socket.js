const express = require("express");
const { eq } = require("lodash");
const router = express.Router();
const { SocketHandler } = require("../socketHandler");

router.post("/avStatusUpdate", async (req, res) => {
  const adminSockets = SocketHandler.getSocketsOfAdmins();

  adminSockets.forEach((socket) => {
    console.log("Emitting");
    socket.emit("avStatusUpdated", {
      vid: req.body.vid,
      vcurrentstatus: req.body.vcurrentstatus,
    });
  });
  console.log("OUT OF FOR");
  res.status(200).send();
});

// added
router.post("/avCurrentServiceUpdate", async (req, res) => {
  const userSockets = SocketHandler.getSocketsOfUsers();

  userSockets.forEach((socket) => {
    console.log("Emitting1");
    socket.emit("activeVehicleData", {
      currentState: req.body.vcurrentstatus,
      serviceState: req.body.vservicestatus,
      roadService: req.body.roadservice,
    });
    //console.log(req.body.currentState);
    console.log(req.body);
  });
  console.log("OUT OF FOR1");
  res.status(200).send();
});

// 
router.post("/avLocationUpdate", async (req, res) => {
  const userSockets = SocketHandler.getSocketsOfUsers();

  userSockets.forEach((socket) => {
    console.log("Emitting1");
    socket.emit("activeVehicleLocation", {
      currentLocation: req.body.currentLocation,
    });
    console.log(req.body);
  });
  console.log("OUT OF FOR1");
  res.status(200).send();
});

// additional sensors
router.post("/avSensorUpdate", async (req, res) => {
  const userSockets = SocketHandler.getSocketsOfUsers();

  userSockets.forEach((socket) => {
    console.log("Emitting1");
    socket.emit("activeSensorInformation", {
      tailight: req.body.tailight,
      headlight: req.body.headlight,
      temperature: req.body.temperature,
      // ..... (ADD ADDTIONAL SENSORS THAT ARE BEING RECEIVED)
    });
    console.log(req.body);
  });
  console.log("OUT OF FOR1");
  res.status(200).send();
});

module.exports = router;
