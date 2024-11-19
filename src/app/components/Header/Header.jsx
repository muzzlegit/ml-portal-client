import { UserMenu } from "modules/authorization";
import { Container } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <div>Logo</div>
      <UserMenu />
    </Container>
  );
};

export default Header;
