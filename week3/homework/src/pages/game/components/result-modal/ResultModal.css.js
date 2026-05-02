import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const overlay = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: `color-mix(in srgb, ${themeVars.color.gray800}, transparent 40%)`,
});

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "5rem",
  backgroundColor: themeVars.color.white,
  borderRadius: themeVars.radius.l,
});

export const title = style({
  color: themeVars.color.gray800,
  ...themeVars.font.heading_sb_20,
});

export const score = style({
  color: themeVars.color.orange500,
  ...themeVars.font.heading_b_22,
});

export const resetTime = style({
  color: themeVars.color.gray800,
  ...themeVars.font.body_m_16,
});
