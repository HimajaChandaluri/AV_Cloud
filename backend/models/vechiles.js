const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const userVechileArray = [
    {
      vId: "1",
      vColor: "Blue",
      vMake: "Bmw",
      vModel: "335",
      vMileage: "20,000",
      vPspace: "5",
    },
  ];

  class VechileList {
    static getVechiles() {
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
            console.log(Object.keys(userVechileArray) + " RESULT432");
            // console.log(result + "RESULT");
            console.log(userVechileArray[0].vColor + "RESULT1");
            resolve(userVechileArray);
          }, 300);
        });
      }
    static addVechile(vechile) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const vechileData = {
              vId: vechile.vId,
              vColor: vechile.vColor,
              vMake: vechile.vMake,
              vModel: vechile.vModel,
              vMileage: vechile.vMileage,
              vPspace: vechile.vPspace,
            };
            userVechileArray.push(vechileData);
            console.log("PUSHED: ", userVechileArray);
            resolve(userVechileArray);
          }, 300);
        });
      }
  }
  module.exports.VechileList = VechileList;
  