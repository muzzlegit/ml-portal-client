import ColorsBar from "../UserMenu/atoms/ColorsBar/ColorsBar";
import IconsBar from "../UserMenu/atoms/IconsBar/IconsBar";
import { Container } from "./AuthForm.styled";
import useAuthForm from "./useAuthForm";

const AuthForm = () => {
  const {
    email,
    password,
    icon,
    color,
    handleEmail,
    handlePassword,
    handleIcon,
    handleColor,
  } = useAuthForm();

  return (
    <Container>
      <div>Увійти</div>
      <div>Зареєструватись</div>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          handleEmail(e.currentTarget.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          handlePassword(e.currentTarget.value);
        }}
      />
      <IconsBar icon={icon} iconColor={color} onClick={handleIcon} />
      <ColorsBar color={color} onClick={handleColor} />
    </Container>
  );
};

export default AuthForm;
