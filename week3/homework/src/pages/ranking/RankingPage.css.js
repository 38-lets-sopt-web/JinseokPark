import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const rankingBoard = style({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "5rem",
  minHeight: "45rem",
  backgroundColor: themeVars.color.blue50,
  borderRadius: themeVars.radius.l,
});

export const boardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = style({
  ...themeVars.font.heading_sb_20,
});
