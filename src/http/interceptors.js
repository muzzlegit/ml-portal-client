import { LocalStorageService } from "services/index";

export default function applyInterceptors(api) {
  api.interceptors.request.use((config) => {
    const { state } = LocalStorageService.getItem("auth-storage");
    config.headers.Authorization = `Bearer ${state?.token}`;
    return config;
  });
}
