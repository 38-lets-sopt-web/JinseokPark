import { header } from "./components/header.js";
import { modal } from "./components/modal.js";
import { renderTable } from "./components/table.js";
import { initData } from "./store/storage.js";
import { filter } from "./components/filter.js";
import { history } from "./components/history.js";

const init = () => {
  initData();
  renderTable();
  header();
  modal();
  filter();
  history();
};

document.addEventListener("DOMContentLoaded", init);
