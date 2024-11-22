import { ICONS } from "modules/authorization/utils/constants";
import PropTypes from "prop-types";
import { IconComponent } from "shared/ui";
import { Container, Icon, IconsWrap, Title, Wrap } from "./IconsBar.style";

const IconsBar = ({ icon, iconColor, onClick }) => {
  return (
    <Container>
      <Title>Іконка</Title>

      <IconsWrap>
        {ICONS.map((ico) => {
          return (
            <Wrap key={ico} isActive={ico === icon}>
              <IconComponent
                onClick={() => {
                  onClick(ico);
                }}
                iconName={ico}
                width="34"
                height="34"
                stroke={icon === ico ? iconColor : "inherit"}
                styles={Icon}
              />
            </Wrap>
          );
        })}
      </IconsWrap>
    </Container>
  );
};

export default IconsBar;

IconsBar.propTypes = {
  icon: PropTypes.oneOf(ICONS),
  iconColor: PropTypes.string,
  onClick: PropTypes.func,
};
