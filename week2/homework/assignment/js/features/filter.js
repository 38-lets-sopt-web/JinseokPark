import { dom } from "../dom/selectors.js";
import { renderTable } from "./table.js";
import { getFilterValues } from "../utils/filter-value.js";

export const filter = () => {
  const { form, resetBtn } = dom.filter;
  const { historySort } = dom.history;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    historySort.value = "";

    const currentFilter = getFilterValues();
    renderTable(currentFilter);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    renderTable();
    historySort.value = "";
  });
};
