import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./tokens/color";
import { typography } from "./tokens/typography";
import { font } from "./tokens/font";
import { radius } from "./tokens/radius";
import { zIndex } from "./tokens/z-index";

const tokens = {
  color: colors,
  font: font,
  radius: radius,
  zIndex: zIndex,
  ...typography,
};

const themeVars = createGlobalTheme(":root", tokens);

export { themeVars, tokens };
