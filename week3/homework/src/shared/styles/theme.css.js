import { createGlobalTheme } from "@vanilla-extract/css";
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  lineHeight,
} from "./tokens.css";

const tokens = {
  color: colors,
  space: spacing,
  fontSize,
  fontWeight,
  lineHeight,
};

const themeVars = createGlobalTheme(":root", tokens);

export { themeVars, tokens };
