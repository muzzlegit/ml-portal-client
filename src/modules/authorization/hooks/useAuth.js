import { AuthService } from "http/index";
import useAuthStore from "modules/authorization/store/authStore";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const activeForm = useAuthStore((state) => state.activeForm);
  const setIsRegister = useAuthStore(state => state.setIsRegister)
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  const register = async (email, password, userIcon, userColor) => {
    try {
      const response = await AuthService.registration(email, password, userIcon, userColor)
      setIsRegister(true)
      return {
        status: response?.status,
        message: response?.data?.message
      }
    } catch (error) { }
    return {
      status: error?.response?.data.message
    }
  }
  return { isAuth, activeForm, register, handleAuthClick };
};

export default useAuth;
