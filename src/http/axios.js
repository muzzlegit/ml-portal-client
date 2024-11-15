import axios from "axios";
import applyInterceptors from "./interceptors";

const API_URL = "http://localhost:10000/api/";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

applyInterceptors(api);

export default api;
