import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

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
