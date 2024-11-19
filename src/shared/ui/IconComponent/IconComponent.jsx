import PropTypes from "prop-types";
import { Icon } from "./IconComponent.styled";

const IconComponent = ({ sprite, iconName, width, height, ...rest }) => {
  return (
    <Icon width={width + "px"} height={height + "px"} {...rest}>
      <use href={sprite + `#${iconName}`}></use>
    </Icon>
  );
};

export default IconComponent;

IconComponent.propTypes = {
  sprite: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
