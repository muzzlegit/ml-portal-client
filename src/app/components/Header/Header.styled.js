import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "12px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${theme.colors?.primary[100]}`,
  backgroundColor: theme.colors?.secondary[100],
}));
