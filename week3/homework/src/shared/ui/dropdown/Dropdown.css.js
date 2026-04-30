import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const selectBox = style({
  padding: "0.5rem 2rem 0.5rem 1rem",
  backgroundColor: themeVars.color.white,
  borderRadius: themeVars.radius.m,
  border: `1px solid ${themeVars.color.gray800}`,
  color: themeVars.color.gray800,
  cursor: "pointer",
  outline: "none",
  transition: "borderColor 0.2s ease",
  ...themeVars.font.body_sb_13,

  ":focus": {
    borderColor: themeVars.color.blue500,
  },
});
