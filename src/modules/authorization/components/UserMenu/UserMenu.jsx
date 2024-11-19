import useAuthStore from "modules/authorization/store/authStore";
import { useNavigate } from "react-router-dom";
import { IconComponent } from "shared/ui";
import { Container, LinksWrap } from "./UserMenu.styled";
import Avatar from "./atoms/Avatar/Avatar";
import icons from "./userMenuIcons.svg";

const UserMenu = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setActiveForm = useAuthStore((state) => state.setActiveForm);
  const navigate = useNavigate();

  const handleAuthClick = (e) => {
    const formType = e.currentTarget.id;
    if (!formType) return;
    setActiveForm(formType);
    navigate("/auth");
  };

  return (
    <Container>
      <LinksWrap>
        {isAuth ? (
          <IconComponent
            sprite={icons}
            iconName="sign-out"
            width="24"
            height="24"
            styles={{ cursor: "pointer" }}
          />
        ) : (
          <>
            <div title="Войти">
              <IconComponent
                id="login"
                onClick={handleAuthClick}
                sprite={icons}
                iconName="sign-in"
                width="24"
                height="24"
                styles={{ cursor: "pointer" }}
              />
            </div>
            <div title="Зарегистрировать пользователя">
              <IconComponent
                id="register"
                onClick={handleAuthClick}
                sprite={icons}
                iconName="register"
                width="22"
                height="22"
                styles={{ cursor: "pointer" }}
              />
            </div>
          </>
        )}
        <Avatar />
      </LinksWrap>
    </Container>
  );
};

export default UserMenu;
