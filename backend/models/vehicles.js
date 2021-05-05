const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const userVehicleArray = [
  {
    email: "",
    vId: "",
    vColor: "",
    vMake: "",
    vModel: "",
    vMileage: "",
    vPspace: "",
  },
];

const scheduleRideArray = [
  {
    email: "",
    vId: "",
    Origin: "",
    Passengers: "",
    Destination: "",
  },
];

class VehicleList {
  static getVehicles(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("In 'getMyVehicles()', EMAIL: ", email);
        const result = {};

        const task_names = userVehicleArray.map(function (task) {
          return task.vId;
        });
        const t1 = userVehicleArray.filter(function (task) {
          return task.email === email;
        });

        console.log("t1", t1);

        console.log(task_names);

        // userVehicleArray
        // .filter((vehicleList) => vehicleList.email == email)
        // userVechileArray
        //   .map((userVechile, 0) => {
        //     console.log({userVechile} + "LOLO");
        //   });
        // let rA = userVechileArray.map(obj => {
        //     let robj = {};
        //     robj[obj.key] = obj.value
        //     return obj
        // })
        // console.log(Object.keys(userVehicleArray) + " RESULT432");
        // console.log(result + "RESULT");
        // console.log(userVehicleArray[0].vColor + "RESULT1");
        resolve(t1);
      }, 300);
    });
  }
  static addVehicle(vehicle) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const vehicleData = {
          email: vehicle.email,
          vId: vehicle.vId,
          vColor: vehicle.vColor,
          vMake: vehicle.vMake,
          vModel: vehicle.vModel,
          vMileage: vehicle.vMileage,
          vPspace: vehicle.vPspace,
        };

        const task_names = userVehicleArray.map(function (task) {
          return task.vId;
        });

        var n = task_names.includes(vehicle.vId);
        if (!n) {
          userVehicleArray.push(vehicleData);
        }
        //userVehicleArray.push(vehicleData);
        console.log("PUSHED: ", userVehicleArray);
        resolve(userVehicleArray);
      }, 300);
    });
  }

  static scheduleRide(ride) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const scheduleData = {
          email: ride.email,
          vId: ride.vId,
          Origin: ride.Origin,
          Passengers: ride.Passengers,
          Destination: ride.Destination,
        };
        scheduleRideArray.push(scheduleData);
        console.log("PUSHED12341234: ", scheduleRideArray);
        resolve(scheduleRideArray);
      }, 300);
    });
  }

  static getRides(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("In '123()'");
        const result = {};

        const t1 = scheduleRideArray.filter(function (task) {
          return task.email === email;
        });
        // console.log(result + "RESULT");
        //console.log(userVehicleArray[0].vColor + "RESULT1");
        resolve(t1);
      }, 300);
    });
  }
}
module.exports.VehicleList = VehicleList;
