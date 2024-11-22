import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "12px",
  width: "400px",
  height: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  borderRadius: "16px",
  backgroundColor: theme.colors?.secondary[100],

  border: `2px solid ${theme.colors?.white[10]}`,
}));
