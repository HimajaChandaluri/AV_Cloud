import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/av";

export function getAVCount() {
  return http.get(apiEndpoint + "/numberOfAVs");
}

export function getAVStateAndCount() {
  return http.get(apiEndpoint + "/statesOfAVs");
}
