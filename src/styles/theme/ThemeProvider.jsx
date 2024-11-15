import { ThemeProvider } from "@emotion/react";
import useAuthStore from "modules/authorization/store/authStore.js";
import PropTypes from "prop-types";
import getColorToken from "./getColorToken.js";
import { theme } from "./theme.js";

const ThemeProviderComponent = ({ children }) => {
  const userColor = useAuthStore((state) => state.userColor);
  theme.colors.userColor = getColorToken(userColor);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
