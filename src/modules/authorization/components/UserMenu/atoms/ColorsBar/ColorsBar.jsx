import { COLORS } from "modules/authorization/utils/constants";
import PropTypes from "prop-types";
import { Color, ColorsWrap, Container, Title, Wrap } from "./ColorsBar.style";

const ColorsBar = ({ color, onClick }) => {
  return (
    <Container>
      <Title>Colors</Title>

      <ColorsWrap>
        {COLORS.map((c) => {
          return (
            <Wrap key={c} isActive={c === color}>
              <Color
                onClick={() => {
                  onClick(c);
                }}
                color={c}
              />
            </Wrap>
          );
        })}
      </ColorsWrap>
    </Container>
  );
};

export default ColorsBar;

ColorsBar.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};
