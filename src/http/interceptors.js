import axios from "axios";
import { LocalStorageService } from "services/localStorage";

export default function applyInterceptors(api) {
  api.interceptors.request.use((config) => {
    const { state } = LocalStorageService.getItem("auth-storage");
    config.headers.Authorization = `Bearer ${state?.token}`;
    return config;
  });
  api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        try {
          const response = await axios.get(
            "http://localhost:10000/api/auth/refresh",
            { withCredentials: true }
          );
          LocalStorageService.setItem("token", response.data.token);
        } catch (error) {
          console.log(error.message);
        }
      }
      return api.request(originalRequest);
    }
  );
}
