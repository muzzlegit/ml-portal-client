import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "18px",
}));

export const LinksWrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  stroke: theme.colors?.text[40],
  fill: theme.colors?.text[40],
}));
