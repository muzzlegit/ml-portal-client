import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  width: "100%",
  position: "relative",
  fill: theme.colors?.text[100],
  stroke: theme.colors?.text[100],
}));

export const InputField = styled.input(({ theme, isError }) => ({
  padding: "4px 44px",
  height: "50px",
  width: "100%",
  borderRadius: "21px",
  border: `1px solid ${theme.colors?.white[10]}`,
  outline: "none",
  fontSize: "16px",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[40],
  boxShadow: isError ? `0 0 4px 2px ${theme.colors?.red[90]}` : "none",
  "::placeholder": {
    color: theme.colors?.white[20],
  },
  "&:focus": {
    boxShadow: `0 0 10px 2px ${theme.colors?.white[10]}`,
  },
}));

export const IconWrap = styled.div(({ theme }) => ({
  position: "absolute",
  transform: "translate(40%, -50%)",
  top: "50%",
  left: 0,
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: theme.colors?.white[10],
}));

export const PassIconWrap = styled.div(({ theme }) => ({
  position: "absolute",
  transform: "translate(-40%, -50%)",
  top: "50%",
  right: 0,
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: theme.colors?.white[10],
  cursor: "pointer",
}));
