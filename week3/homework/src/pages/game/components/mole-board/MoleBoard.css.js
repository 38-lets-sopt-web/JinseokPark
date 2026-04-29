import { themeVars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const boardContainer = style({
  display: "grid",
  gap: "1.5rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "3rem",
  border: `1px solid ${themeVars.color.gray800}`,
  borderRadius: themeVars.radius.l,
});

export const boardRecipe = recipe({
  base: {
    display: "grid",
    gap: "2rem",
  },
  variants: {
    size: {
      2: { gridTemplateColumns: "repeat(2, 1fr)" },
      3: { gridTemplateColumns: "repeat(3, 1fr)" },
      4: { gridTemplateColumns: "repeat(4, 1fr)" },
    },
  },
  defaultVariants: {
    size: 2,
  },
});
