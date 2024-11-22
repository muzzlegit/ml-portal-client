import styled from "@emotion/styled";

export const Layout = styled.div(({ theme }) => ({
  padding: "14px",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  borderRadius: "24px",
  border: `2px solid ${theme.colors?.white[10]}`,
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));

export const Wrap = styled.div(({ theme }) => ({
  height: "100%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Content = styled.div(({ theme }) => ({
  height: "100%",
  display: "flex",
}));
