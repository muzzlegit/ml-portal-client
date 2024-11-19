import useAuthStore from "modules/authorization/store/authStore";
import { IconComponent } from "shared/ui";
import { Container, Img } from "./Avatar.styled";
import icons from "./avatarIcons.svg";

const Avatar = () => {
  const user = useAuthStore((state) => state.user);
  const userColor = useAuthStore((state) => state.userColor);
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <Container>
      {isAuth ? (
        <IconComponent
          sprite={icons}
          iconName={user?.userIcon ?? "crab"}
          height="28"
          width="28"
          styles={{ stroke: userColor }}
        />
      ) : (
        <Img />
      )}
    </Container>
  );
};

export default Avatar;
