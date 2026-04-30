import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const table = style({
  borderCollapse: "collapse",
  backgroundColor: themeVars.color.white,
  borderRadius: themeVars.radius.m,
  overflow: "hidden",
});

export const thead = style({
  backgroundColor: themeVars.color.blue500,
  color: themeVars.color.white,
});

export const th = style({
  padding: "1.2rem",
  textAlign: "center",
  ...themeVars.font.body_m_14,
});

export const td = style({
  padding: "1rem",
  textAlign: "center",
  ...themeVars.font.body_m_13,
});

export const emptyWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4rem 0",
  color: themeVars.color.blue500,
});

export const emptyTd = style({
  padding: "5rem 0",
  textAlign: "center",
  color: themeVars.color.blue500,
  ...themeVars.font.body_m_16,
});
