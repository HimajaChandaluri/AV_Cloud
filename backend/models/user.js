const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const userArray = [
  {
    _id: "1234",
    name: "admin",
    email: "admin@admin.com",
    password: "$2b$10$2nqIaxdFY9s57nrrMjEM2.5gD.KQ3NF7/wU7taPNAC.lVf7bZbbYS",
    isAdmin: true,
  },
];

class User {
  static findById(_id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("In 'findById()', ID: ", _id);
        const userIndex = _.findIndex(userArray, function (u) {
          return u._id == _id;
        });
        console.log("userIndex: ", userIndex, " data: ", userArray[userIndex]);
        if (userIndex >= 0) resolve(userArray[userIndex]);
        resolve(false);
      }, 300);
    });
  }

  static findIfEmailExists(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("In 'findIfEmailExists()', EMAIL: ", email);
        const userIndex = _.findIndex(userArray, function (u) {
          return u.email == email;
        });
        if (userIndex >= 0) resolve(userArray[userIndex]);
        resolve(false);
      }, 300);
    });
  }

  static addNew(name, email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          "In 'addNew()', NAME: ",
          name,
          ", EMAIL: ",
          email,
          ", PASS: ",
          password
        );
        const user = {
          _id: "1234",
          name: name,
          email: email,
          password: password,
          isAdmin: false,
        };
        userArray.push(user);
        console.log("PUSHED: ", userArray);
        resolve(user);
      }, 300);
    });
  }

  static generateAuthToken(_id, name, email, isAdmin) {
    const token = jwt.sign(
      {
        _id: _id,
        name: name,
        email: email,
        isAdmin: isAdmin,
      },
      config.get("jwtPrivateKey")
    );
    return token;
  }

  static validate(user) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });
    return schema.validate(user);
  }
}

module.exports.User = User;
