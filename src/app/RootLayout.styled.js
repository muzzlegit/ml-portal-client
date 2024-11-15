import styled from "@emotion/styled";

export const Layout = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "40px",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));

export const Form = styled.form(({ theme }) => ({
  border: `1px solid ${theme.colors?.userColor[100]}`,
}));
