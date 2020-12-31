import axios from "axios";

export const baseURL = "http://192.168.0.107:3000";

const api = axios.create({
  baseURL,
});

export default api;
