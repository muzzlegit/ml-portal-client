import iconsSprite from "assets/icons.svg";
import PropTypes from "prop-types";
import { Icon } from "./IconComponent.styled";

const IconComponent = ({
  iconName,
  width = "24",
  height = "24",
  fill = "inherit",
  stroke = "inherit",
  title,
  onClick,
  styles = {},
  ...rest
}) => {
  return (
    <Icon
      width={width}
      height={height}
      onClick={onClick}
      styles={styles}
      fill={fill}
      stroke={stroke}
      {...rest}
    >
      {title && <title>{title}</title>}
      <use href={`${iconsSprite}#${iconName}`} />
    </Icon>
  );
};

export default IconComponent;

IconComponent.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.object,
};
