import useAuth from "modules/authorization/hooks/useAuth";
import { COLORS, ICONS } from "modules/authorization/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNotificationStore from "services/notifications/notificationStore";
import { ValidationService } from "services/validatinService";

const errorMessages = {
  email: "Email is required",
  password: "Password is required",
};

const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(ICONS[0]);
  const [color, setColor] = useState(COLORS[0]);
  const [errors, setErrors] = useState({ email: null, password: null });
  const [isLoading, setIsLoading] = useState(false);
  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const handleEmail = (email) => {
    setErrors((prev) => ({ ...prev, email: null }));
    setEmail(email);
  };

  const handlePassword = (password) => {
    setErrors((prev) => ({ ...prev, password: null }));
    setPassword(password);
  };

  const handleIcon = (icon) => {
    setIcon(icon);
  };

  const handleColor = (color) => {
    setColor(color);
  };

  const validateField = (value, schema, fieldName) => {
    if (!value?.trim()) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: errorMessages[fieldName],
      }));
      return { success: false };
    }
    const { success, data, message } = ValidationService.validateBySchema(
      value,
      schema
    );
    if (!success) {
      setErrors((prev) => ({ ...prev, [fieldName]: message }));
    }
    return { success, data };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailResult = validateField(
      email,
      ValidationService.emailSchema,
      "email"
    );

    const passwordResult = validateField(
      password,
      ValidationService.passwordSchema,
      "password"
    );

    if (emailResult?.success && passwordResult?.success) {
      setIsLoading(true);

      const registrationResult = await register(
        emailResult.data,
        passwordResult.data,
        icon,
        color
      );
      addNotification(
        registrationResult.status === 201 ? "success" : "error",
        registrationResult.message
      );
      setIsLoading(false);
      const loginResult = await login(emailResult.data, passwordResult.data);
      addNotification(
        loginResult.status === 200 ? "success" : "error",
        loginResult.message
      );
      navigate("/");
    }
  };
  return {
    email,
    password,
    icon,
    color,
    errors,
    isLoading,
    handleEmail,
    handlePassword,
    handleIcon,
    handleColor,
    handleSubmit,
  };
};

export default useAuthForm;
