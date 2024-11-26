import PropTypes from "prop-types";
import { useState } from "react";
import { IconComponent } from "shared/ui";
import { Container, IconWrap, InputField, PassIconWrap } from "./Input.styled";

const iconsName = {
  email: "at",
  password: "password",
};

const Input = ({ type, value, handleInputValue, placeholder, isError }) => {
  const [passwordEyeOn, setPasswordEyeOff] = useState(false);

  return (
    <Container>
      <InputField
        type={type === "password" && passwordEyeOn ? "text" : type}
        value={value}
        onChange={(e) => {
          handleInputValue(e.currentTarget.value);
        }}
        placeholder={placeholder}
        autoComplete="email"
        isError={isError}
      />
      <IconWrap>
        <IconComponent iconName={iconsName[type]} width="20" height="20" />
      </IconWrap>
      {type === "password" ? (
        <PassIconWrap>
          <IconComponent
            iconName={passwordEyeOn ? "eye" : "eye-off"}
            width="20"
            height="20"
            onClick={() => {
              setPasswordEyeOff((prev) => !prev);
            }}
          />
        </PassIconWrap>
      ) : null}
    </Container>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.oneOf(["email", "password"]),
  value: PropTypes.string.isRequired,
  handleInputValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
};
