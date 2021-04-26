const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const userVehicleArray = [
    {
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
      vId: "",
      Origin: "",
      Passengers: "",
      Destination: "",


    },
  ];

  class VehicleList {
    static getVehicles() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("In '123()'");
            const result = {};
            // userVechileArray
            //   .map((userVechile, 0) => {
            //     console.log({userVechile} + "LOLO");
            //   });
            // let rA = userVechileArray.map(obj => {
            //     let robj = {};
            //     robj[obj.key] = obj.value
            //     return obj
            // })
            console.log(Object.keys(userVehicleArray) + " RESULT432");
            // console.log(result + "RESULT");
            console.log(userVehicleArray[0].vColor + "RESULT1");
            resolve(userVehicleArray);
          }, 300);
        });
      }
    static addVehicle(vehicle) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const vehicleData = {
              vId: vehicle.vId,
              vColor: vehicle.vColor,
              vMake: vehicle.vMake,
              vModel: vehicle.vModel,
              vMileage: vehicle.vMileage,
              vPspace: vehicle.vPspace,
            };
            userVehicleArray.push(vehicleData);
            console.log("PUSHED: ", userVehicleArray);
            resolve(userVehicleArray);
          }, 300);
        });
      }

      static scheduleRide(ride) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const scheduleData = {
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

      static getRides() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("In '123()'");
            const result = {};
            // console.log(result + "RESULT");
            //console.log(userVehicleArray[0].vColor + "RESULT1");
            resolve(scheduleRideArray);
          }, 300);
        });
      }
  }
  module.exports.VehicleList = VehicleList;
  