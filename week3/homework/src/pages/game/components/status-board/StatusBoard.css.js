import { style } from "@vanilla-extract/css";

export const boardContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  width: "100%",
  maxWidth: "400px",
});

export const fullWidth = style({
  gridColumn: "span 2",
});
