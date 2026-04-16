import { dom } from "../dom/selectors.js";
import { renderTable } from "./table.js";

export const filter = () => {
  const { form, resetBtn } = dom.filter;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const filterValues = {
      title: document.getElementById("filter-title").value,
      type: document.getElementById("filter-type").value,
      category: document.getElementById("filter-category").value,
      payment: document.getElementById("filter-payment").value,
    };

    renderTable(filterValues);
  });

  resetBtn.addEventListener("click", () => {
    form.reset();
    renderTable();
  });
};
