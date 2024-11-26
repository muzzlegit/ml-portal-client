import styled from "@emotion/styled";

export const ButtonContainer = styled.button(({ theme, isLoading }) => ({
  padding: "4px 21px",
  width: "60%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "21px",
  fontSize: "16px",
  border: `1px solid ${theme.colors?.white?.[10] || "#FFF"}`,
  color: theme.colors?.text?.[100] || "#FFF",
  stroke: theme.colors?.text?.[100] || "#FFF",
  fill: theme.colors?.text?.[100] || "#FFF",
  backgroundColor: theme.colors?.primary?.[40] || "#FFF",
  cursor: isLoading ? "wait" : "pointer",
  "&:hover": isLoading
    ? {}
    : {
        backgroundColor: theme.colors?.white?.[20] || "#FFF",
        color: theme.colors?.primary?.[100] || "#FFF",
        boxShadow: `0 0 4px 3px ${theme.colors?.white?.[40] || "#FFF"}`,
        outline: "none",
      },
  "&:active": isLoading
    ? {}
    : {
        fontSize: "14px",
        backgroundColor: theme.colors?.white?.[60] || "#FFF",
        color: theme.colors?.primary?.[100] || "#FFF",
        boxShadow: `inset 0 0 10px 3px ${theme.colors?.black?.[60] || "#FFF"}`,
      },
}));
