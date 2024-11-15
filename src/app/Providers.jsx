import PropTypes from "prop-types";
import { NotificationProvider } from "services";
import { ThemeProviderComponent } from "styles/theme";

const Providers = ({ children }) => {
  return (
    <ThemeProviderComponent>
      <NotificationProvider>{children}</NotificationProvider>
    </ThemeProviderComponent>
  );
};

export default Providers;

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
