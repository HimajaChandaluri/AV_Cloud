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
  console.log(subscriptionData);
  return http.post(apiEndpoint + "/plan", {
    startDate: subscriptionData.startDate,
    endDate: subscriptionData.endDate,
    amount: subscriptionData.amount,
    paymentType: subscriptionData.paymentType,
    tag: subscriptionData.tag,
  });
}
