import { header } from "./components/header.js";
import { modal } from "./components/modal.js";

const init = () => {
  header();
  modal();
};

document.addEventListener("DOMContentLoaded", init);
