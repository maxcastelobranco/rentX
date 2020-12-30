import axios from "axios";

export const baseURL = "http://192.168.0.104:3000";

const api = axios.create({
  baseURL,
});

export default api;
