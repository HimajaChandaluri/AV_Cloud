const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const userSubscriptionArray = [
  {
    email: "himaja.chandaluri@gmail.com",
    startDate: "1 May 2021",
    endDate: "30 May 2021",
    amount: "$20",
    paymentType: "Credit Card",
    tag: "current",
  },
  {
    email: "himaja.chandaluri@gmail.com",
    startDate: "1 Apr 2021",
    endDate: "30 Apr 2021",
    amount: "$20",
    paymentType: "Credit Card",
    tag: "past",
  },
  {
    email: "himaja.chandaluri@gmail.com",
    startDate: "1 Mar 2021",
    endDate: "31 Mar 2021",
    amount: "$20",
    paymentType: "Debit Card",
    tag: "past",
  },
  {
    email: "himaja.chandaluri@gmail.com",
    startDate: "1 Feb 2021",
    endDate: "28 Feb 2021",
    amount: "$20",
    paymentType: "Credit Card",
    tag: "past",
  },
  {
    email: "himaja.chandaluri@gmail.com",
    startDate: "1 Jan 2021",
    endDate: "31 Jan 2021",
    amount: "$20",
    paymentType: "Paypal",
    tag: "past",
  },
];

class UserSubscription {
  static getMySubscriptions(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("In 'getMySubscriptions()', EMAIL: ", email);
        const result = {};
        result.future = [];
        result.current = [];
        result.past = [];
        userSubscriptionArray
          .filter((userSubscription) => userSubscription.email == email)
          .map((userSubscription) => {
            if (userSubscription.tag == "future") {
              result.future.push(userSubscription);
            } else if (userSubscription.tag == "current") {
              result.current.push(userSubscription);
            } else {
              result.past.push(userSubscription);
            }
          });
        // console.log(result);
        resolve(result);
      }, 300);
    });
  }

  static addNewSubscription(subscription) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userSubscription = {
          email: subscription.email,
          startDate: subscription.startDate,
          endDate: subscription.endDate,
          amount: subscription.amount,
          paymentType: subscription.paymentType,
          tag: subscription.tag || "future",
        };
        userSubscriptionArray.push(userSubscription);
        console.log("PUSHED: ", userSubscriptionArray);
        resolve(userSubscription);
      }, 300);
    });
  }

  static validate(user) {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      startDate: Joi.string().required(),
      endDate: Joi.string().required(),
      amount: Joi.string().required(),
      paymentType: Joi.string().required(),
      tag: Joi.string(),
    });
    return schema.validate(user);
  }
}

module.exports.UserSubscription = UserSubscription;
