import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  fontFamily: `'Pretendard Variable', sans-serif`,
  lineHeight: 1.5,
  backgroundColor: themeVars.color.white,
  color: themeVars.color.gray800,
});

globalStyle(":focus-visible", {
  outline: "2px solid currentColor",
  outlineOffset: "2px",
});
