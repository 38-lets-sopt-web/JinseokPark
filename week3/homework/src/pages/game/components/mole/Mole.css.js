import { style } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles/theme.css";

export const cardWrapper = style({
  width: "10rem",
  height: "10rem",
  perspective: "800",
  cursor: "pointer",
});

export const cardInner = style({
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
});

export const isFlipped = style({
  transform: "rotateY(180deg)",
});

const baseSide = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: themeVars.radius.full,
  backfaceVisibility: "hidden",
  overflow: "hidden",
  border: `2px solid ${themeVars.color.blue500}`,
});

export const cardFront = style([
  baseSide,
  {
    backgroundColor: themeVars.color.blue50,
  },
]);

export const cardBack = style([
  baseSide,
  {
    backgroundColor: themeVars.color.white,
    transform: "rotateY(180deg)",
  },
]);

export const cardImage = style({
  width: "80%",
  height: "80%",
  objectFit: "contain",
  WebkitUserDrag: "none",
});
