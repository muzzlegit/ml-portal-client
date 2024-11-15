import PropTypes from "prop-types";
import {
  Container,
  Label,
  Message,
  MessageWrap,
  Notification,
} from "./NotificationContainer.styled";

const NotificationContainer = ({ notifications }) => {
  return (
    <Container>
      {notifications.map(({ id, type, message }) => {
        return (
          <Notification key={id} type={type}>
            <Label type={type} />
            <MessageWrap>
              <Message type={type}>{message}</Message>
            </MessageWrap>
          </Notification>
        );
      })}
    </Container>
  );
};

export default NotificationContainer;

NotificationContainer.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(["info", "success", "warn", "error"]).isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};
