import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://localhost:1314",
    timeout: 30000,
  });
  return instance(config);
}
