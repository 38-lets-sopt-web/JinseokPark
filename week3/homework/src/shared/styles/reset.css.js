import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body, p, h1, h2, h3, h4, h5, h6", {
  margin: 0,
});

globalStyle("ol, ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
  color: "inherit",
});

globalStyle("button", {
  background: "none",
  border: 0,
  padding: 0,
  cursor: "pointer",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});
