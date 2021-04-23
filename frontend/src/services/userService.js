import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function getSubscriptionData() {
  return http.get(apiEndpoint + "/plan");
}

export function addNewSubscription(subscriptionData) {
  return http.post(apiEndpoint + "/plan", {
    startDate: subscriptionData.startDate,
    endDate: subscriptionData.endDate,
    amount: subscriptionData.amount,
    paymentType: subscriptionData.paymentType,
    tag: subscriptionData.tag,
  });
}

export function getUserCount() {
  return http.get(apiEndpoint + "/numberOfUsers");
}

// added
export function addVechile(vechileData) {
  return http.post(apiEndpoint + "/myVechiles", {
    vId: vechileData.vId,
    vColor: vechileData.vColor,
    vMake: vechileData.vMake,
    vModel: vechileData.vModel,
    vMileage: vechileData.vMileage,
    vPspace: vechileData.vPspace,
  });
}
export function getVechiles() {
  return http.get(apiEndpoint + "/myVechiles");
}

