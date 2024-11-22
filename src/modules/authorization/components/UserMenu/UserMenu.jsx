import { IconComponent } from "shared/ui";
import useAuth from "../../hooks/useAuth.js";
import {
  AvatarWrap,
  Container,
  IconStyles,
  LinksWrap,
} from "./UserMenu.styled";
import Avatar from "./atoms/Avatar/Avatar";

const UserMenu = () => {
  const { isAuth, handleAuthClick } = useAuth();

  return (
    <Container>
      <LinksWrap>
        {
          isAuth ? (
            <IconComponent
              title="Вийти"
              iconName="sign-out"
              width="24"
              height="24"
              styles={IconStyles}
            />
          ) : null
          // <>
          //   <IconComponent
          //     id="login"
          //     title="Увійти"
          //     onClick={handleAuthClick}
          //     iconName="sign-in"
          //     width="22"
          //     height="22"
          //     styles={IconStyles}
          //   />

          //   <IconComponent
          //     id="register"
          //     title="Зареєструватись"
          //     onClick={handleAuthClick}
          //     iconName="register"
          //     width="22"
          //     height="22"
          //     styles={IconStyles}
          //   />
          // </>
        }
        <AvatarWrap onClick={handleAuthClick}>
          <Avatar />
        </AvatarWrap>
      </LinksWrap>
    </Container>
  );
};

export default UserMenu;
