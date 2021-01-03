import axios from "axios";

export const baseURL = "http://192.168.0.107:3000";

const api = axios.create({
  baseURL,
});

export const fetcher = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};

export default api;
