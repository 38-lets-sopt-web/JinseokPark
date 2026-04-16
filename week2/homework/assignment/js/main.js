import { header } from "./components/header.js";
import { modal } from "./components/modal.js";
import { renderTable } from "./components/table.js";
import { initData } from "./store/storage.js";

const init = () => {
  initData();
  renderTable();
  header();
  modal();
};

document.addEventListener("DOMContentLoaded", init);
