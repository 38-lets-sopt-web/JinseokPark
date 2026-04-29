import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "2.5rem",
  padding: "2rem 4rem",
  borderRadius: themeVars.radius.l,
  backgroundColor: themeVars.color.blue50,
});

export const title = style({
  ...themeVars.font.heading_sb_22,
});

export const buttonContainer = style({
  display: "flex",
  gap: "0.5rem",
});
