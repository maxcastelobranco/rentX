import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.107:3000",
});

export const fetcher = async (url: string) => {
  const { data } = await api.get(url);
  return data;
};

export default api;
