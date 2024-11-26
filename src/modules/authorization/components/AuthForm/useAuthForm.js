import { COLORS, ICONS } from "modules/authorization/utils/constants";
import { useState } from "react";
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

  const handleSubmit = (e) => {
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

    if (emailResult?.success && passwordResult?.success)
      console.log({
        email: emailResult.data,
        password: passwordResult.data,
        userColor: color,
        userIco: icon,
      });
  };
  return {
    email,
    password,
    icon,
    color,
    errors,
    handleEmail,
    handlePassword,
    handleIcon,
    handleColor,
    handleSubmit,
  };
};

export default useAuthForm;
