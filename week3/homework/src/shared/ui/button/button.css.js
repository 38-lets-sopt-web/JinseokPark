import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "@/shared/styles/theme.css";

export const buttonRecipe = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 2rem",
    border: "1px solid transparent",
    borderRadius: themeVars.radius.l,
    color: themeVars.color.gray800,
    transition: "transform 0.2s ease-in-out",
    ...themeVars.font.caption_m_12,
    ":hover": {
      transform: "translateY(-4px)",
    },
    ":disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },

  variants: {
    variant: {
      ranking: {
        backgroundColor: themeVars.color.blue50,
        borderColor: themeVars.color.blue500,
        color: themeVars.color.blue500,
      },
      gameStart: {
        backgroundColor: themeVars.color.blue500,
        borderColor: themeVars.color.blue500,
        color: themeVars.color.white,
      },
      gameStop: {
        backgroundColor: themeVars.color.red500,
        borderColor: themeVars.color.red500,
        color: themeVars.color.white,
      },
    },
  },

  defaultVariants: {
    variant: "gameStart",
  },
});
