import useAuthStore from "modules/authorization/store/authStore";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const activeForm = useAuthStore((state) => state.activeForm);

  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  return { isAuth, activeForm, handleAuthClick };
};

export default useAuth;
