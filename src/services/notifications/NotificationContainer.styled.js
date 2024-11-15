import styled from "@emotion/styled";
import { config } from "./config";

export const Container = styled.div({
  position: "fixed",
  top: "2px",
  right: "2px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

export const Notification = styled.div(({ type }) => ({
  minHeight: "40px",
  height: "auto",
  minWidth: "140px",
  paddingRight: "12px",
  display: "flex",
  justifyContent: "start",
  alignItems: "strech",
  borderRadius: "6px",
  border: `1px solid ${config.colors?.[type]?.label || "#FFF"}`,
  overflow: "hidden",
  backgroundColor: config.colors?.[type]?.background || "#000",
}));

export const Label = styled.div(({ type }) => ({
  height: "auto",
  flex: "0 0 6px",
  backgroundColor: config.colors?.[type]?.label || "#FFF",
}));

export const MessageWrap = styled.div({
  padding: "6px 12px",

  height: "100%",
  textAlign: "center",
});

export const Message = styled.p(({ type }) => ({
  height: "100%",
  whiteSpace: "none",
  color: config.colors?.[type]?.text || "#FFF",
  fontSize: config.fontSize || "14px",
}));
