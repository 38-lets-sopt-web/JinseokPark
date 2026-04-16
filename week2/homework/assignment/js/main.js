import { header } from "./features/header.js";
import { modal } from "./features/modal.js";
import { renderTable } from "./features/table.js";
import { initData } from "./store/storage.js";
import { filter } from "./features/filter.js";
import { history } from "./features/history.js";

const init = () => {
  initData();
  renderTable();
  header();
  modal();
  filter();
  history();
};

document.addEventListener("DOMContentLoaded", init);
