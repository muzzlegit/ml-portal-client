import ColorsBar from "../UserMenu/atoms/ColorsBar/ColorsBar";
import IconsBar from "../UserMenu/atoms/IconsBar/IconsBar";
import Input from "./Atoms/Input/Input";
import { Container, Error } from "./AuthForm.styled";
import useAuthForm from "./useAuthForm";

const AuthForm = () => {
  const {
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
  } = useAuthForm();

  return (
    <Container>
      <div>Увійти</div>
      <div>Зареєструватись</div>
      <Input
        type="email"
        value={email}
        handleInputValue={handleEmail}
        placeholder="Enter your email"
        isError={!!errors?.email}
      />
      <Error>{errors?.email}</Error>
      <Input
        type="password"
        value={password}
        handleInputValue={handlePassword}
        placeholder="Enter your password"
        isError={!!errors?.password}
      />
      <Error>{errors?.password}</Error>
      <IconsBar icon={icon} iconColor={color} onClick={handleIcon} />
      <ColorsBar color={color} onClick={handleColor} />
      <button onClick={handleSubmit}>boom</button>
    </Container>
  );
};

export default AuthForm;
