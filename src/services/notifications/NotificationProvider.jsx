import PropTypes from "prop-types";
import NotificationContainer from "./NotificationContainer";
import useNotificationStore from "./notificationStore";

const NotificationProvider = ({ children }) => {
  const notifications = useNotificationStore((state) => state.notifications);

  return (
    <>
      {children}
      <NotificationContainer notifications={notifications} />
    </>
  );
};

export default NotificationProvider;

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
