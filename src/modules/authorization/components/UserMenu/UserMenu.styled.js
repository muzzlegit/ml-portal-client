import styled from "@emotion/styled";
import { theme } from "styles/theme";

export const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "18px",
}));

export const LinksWrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fill: theme.colors?.text[60],
}));

export const IconStyles = {
  cursor: "pointer",
  "&:hover": {
    fill: theme.colors?.textAcent[100],
  },
};

export const AvatarWrap = styled.div({
  cursor: "pointer",
});
