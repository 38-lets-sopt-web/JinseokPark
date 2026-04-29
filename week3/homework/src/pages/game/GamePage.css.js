import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const pageContainer = style({
  display: "grid",
  gridTemplateColumns: "30rem 1fr",
  marginTop: "5rem",
  gap: "4rem",
});

export const gameBoard = style({
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
  padding: "3rem",
  borderRadius: themeVars.radius.l,
  backgroundColor: themeVars.color.blue50,
});

export const boardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const buttonContainer = style({
  display: "flex",
  gap: "0.5rem",
});
