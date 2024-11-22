import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "12px",
  width: "100%",
  borderRadius: "12px",
  backgroundColor: theme.colors?.primary[30],
}));

export const IconsWrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  stroke: theme.colors?.text[100],
}));

export const Wrap = styled.div(({ theme, isActive }) => ({
  padding: "10px",
  borderRadius: "50px",
  backgroundColor: isActive ? theme.colors?.white[20] : "transparent",
}));

export const Icon = {
  cursor: "pointer",
};

export const Title = styled.div(({ theme }) => ({
  marginBottom: "8px",
  colors: theme.colors?.text[100],
}));
