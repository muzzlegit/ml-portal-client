import { COLORS, ICONS } from "modules/authorization/utils/constants";
import { useCallback, useState } from "react";

const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(ICONS[0]);
  const [color, setColor] = useState(COLORS[0]);

  const handleEmail = useCallback((email) => {
    setEmail(email);
  }, []);

  const handlePassword = useCallback((password) => {
    setPassword(password);
  }, []);

  const handleIcon = useCallback((icon) => {
    setIcon(icon);
  }, []);

  const handleColor = useCallback((color) => {
    setColor(color);
  }, []);

  return {
    email,
    password,
    icon,
    color,
    handleEmail,
    handlePassword,
    handleIcon,
    handleColor,
  };
};

export default useAuthForm;
