import axios from "axios";
import { AuthService } from "http/index";
import useAuthStore from "modules/authorization/store/authStore";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const activeForm = useAuthStore((state) => state.activeForm);
  const setAuth = useAuthStore((state) => state.setAuth);
  const setIsRegister = useAuthStore((state) => state.setIsRegister);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  const register = async (email, password, userIcon, userColor) => {
    try {
      const response = await AuthService.registration(
        email,
        password,
        userIcon,
        userColor
      );
      setIsRegister(true);
      return {
        status: response?.status,
        message: response?.data?.message,
      };
    } catch (error) {
      return {
        status: error?.response?.data.message,
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      setAuth(true);
      const { user, token } = response.data;
      setToken(token);
      setUser(user);
      return {
        status: response?.status,
        message: response?.data?.message,
      };
    } catch (error) {
      return {
        status: error?.response?.data.message,
      };
    }
  };

  const refresh = async () => {
    try {
      const response = await axios.get(
        "http://localhost:10000/api/auth/refresh",
        { withCredentials: true }
      );
      setAuth(true);
      const { user, token } = response.data;
      setToken(token);
      setUser(user);
    } catch (error) {
      return {
        status: error?.response?.data.message,
      };
    }
  };

  return { isAuth, activeForm, register, login, refresh, handleAuthClick };
};

export default useAuth;
