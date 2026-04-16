import { header } from "../features/header.js";
import { renderTable } from "../features/table.js";

export const renderApp = () => {
  header();
  renderTable();
};
