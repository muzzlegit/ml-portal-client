import ColorsBar from "../UserMenu/atoms/ColorsBar/ColorsBar";
import IconsBar from "../UserMenu/atoms/IconsBar/IconsBar";
import Input from "./Atoms/Input/Input";
import SubmitButton from "./Atoms/SubmitButton/SubmitButton";
import { Container, Error } from "./AuthForm.styled";
import useAuthForm from "./useAuthForm";

const AuthForm = () => {
  const {
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
  } = useAuthForm();

  return (
    <Container onSubmit={handleSubmit}>
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
      <SubmitButton isLoading={isLoading}>{"REGISTER"}</SubmitButton>
    </Container>
  );
};

export default AuthForm;
