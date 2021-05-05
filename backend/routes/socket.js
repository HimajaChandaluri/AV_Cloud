const express = require("express");
const { eq } = require("lodash");
const router = express.Router();
const { SocketHandler } = require("../socketHandler");

router.post("/avStatusUpdate", async (req, res) => {
  const adminSockets = SocketHandler.getSocketsOfAdmins();

  adminSockets.forEach((socket) => {
    console.log("Emitting");
    socket.emit("avStatusUpdated", {
      number: req.body.number,
      status: req.body.status,
    });
  });
  console.log("OUT OF FOR");
  res.status(200).send();
});

// added
router.post("/avVehicleUpdate", async (req, res) => {
  const userSockets = SocketHandler.getSocketsOfUsers();
  
  userSockets.forEach((socket) => {
    console.log("Emitting1");
    socket.emit("avVehicleUpdate", {
      currentState: req.body.currentState,
    });
    console.log(req.body.currentState);
  });
  console.log("OUT OF FOR1");
  res.status(200).send();
});

module.exports = router;
