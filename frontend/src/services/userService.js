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
export function addVehicle(vehicleData) {
  return http.post(apiEndpoint + "/myVehicles", {
    vId: vehicleData.vId,
    vColor: vehicleData.vColor,
    vMake: vehicleData.vMake,
    vModel: vehicleData.vModel,
    vMileage: vehicleData.vMileage,
    vPspace: vehicleData.vPspace,
  });
}
//added
export function deleteVehicle(vehicleData) {
  return http.delete(apiEndpoint + "/deleteVehicles" , {
    vId: vehicleData.vId,
  });
}

export function getVehicles() {
  return http.get(apiEndpoint + "/myVehicles");
}

export function getRides() {
  return http.get(apiEndpoint + "/myRides");
}

export function scheduleRide(scheduleData) {
  return http.post(apiEndpoint + "/scheduleRide", {
    vId: scheduleData.vId,
    Origin: scheduleData.Origin,
    Passengers: scheduleData.Passengers,
    Destination: scheduleData.Destination,
  });
}

