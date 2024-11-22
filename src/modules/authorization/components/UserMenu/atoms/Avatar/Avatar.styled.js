import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  position: "relative",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: theme.colors?.secondary[100],
  boxShadow: `inset 0 4px 10px ${theme.colors?.primary[100]}`,
  border: `1px solid ${theme.colors?.primary[10]}`,
}));

export const Img = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  "::before": {
    position: "absolute",
    zIndex: "2",
    top: "30%",
    left: "50%",
    transform: "translate( -50%, 0)",
    content: '""',
    borderRadius: "50%",
    width: `${40 * 0.338}px`,
    height: `${40 * 0.338}px`,
    backgroundColor: theme.colors?.primary[100],
  },
  "::after": {
    position: "absolute",
    zIndex: "2",
    bottom: "0",
    left: "50%",
    transform: "translate( -50%, 40%)",
    content: '""',
    borderRadius: "50%",
    width: `${40 * 0.824}px`,
    height: `${40 * 0.824}px`,
    backgroundColor: theme.colors?.primary[100],
  },
}));
