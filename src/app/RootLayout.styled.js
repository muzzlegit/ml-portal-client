import styled from "@emotion/styled";

export const Layout = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[100],
}));

export const Wrap = styled.div({
  height: "100%",
  flex: 1,
});

export const Content = styled.div(({ theme }) => ({
  height: "100%",
  display: "flex",
}));
