import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const itemContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "1.6rem",
  borderRadius: themeVars.radius.l,
  backgroundColor: themeVars.color.blue50,
});

export const label = style({
  color: themeVars.color.gray800,
  ...themeVars.font.body_m_13,
});

export const textRecipe = recipe({
  variants: {
    type: {
      number: { ...themeVars.font.heading_b_22 },
      message: { ...themeVars.font.body_sb_13 },
    },
    status: {
      success: { color: themeVars.color.blue500 },
      fail: { color: themeVars.color.red500 },
      default: { color: themeVars.color.gray800 },
    },
  },
  defaultVariants: {
    type: "number",
    status: "default",
  },
});
