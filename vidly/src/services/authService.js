import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth";

export function login(email, password) {
  http.post(apiEndpoint, { email, password });
}
