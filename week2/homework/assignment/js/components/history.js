import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { renderTable } from "./table.js";
import { getFilterValues } from "../utils/filter-value.js";
import { openDetailModal } from "./modal.js";

export const history = () => {
  const { allCheckbox, deleteBtn, list, historySort } = dom.history;

  allCheckbox.addEventListener("change", (e) => {
    const checkboxes = list.querySelectorAll(".history__checkbox");
    checkboxes.forEach((item) => (item.checked = e.target.checked));
  });

  list.addEventListener("change", (e) => {
    if (e.target.classList.contains("history__checkbox")) {
      const checkboxes = list.querySelectorAll(".history__checkbox");

      const allCount = checkboxes.length;
      const checkedCount = list.querySelectorAll(
        ".history__checkbox:checked",
      ).length;

      allCheckbox.checked = allCount > 0 && allCount === checkedCount;
    }
  });

  deleteBtn.addEventListener("click", () => {
    const checkedBoxes = list.querySelectorAll(".history__checkbox:checked");

    if (checkedBoxes.length === 0) {
      alert("선택한 항목이 없습니다.");
      return;
    }

    if (!confirm("선택한 항목을 삭제하시겠습니까?")) return;

    const selectedIds = Array.from(checkedBoxes).map((item) =>
      Number(item.dataset.id),
    );

    const currentData = getData();
    const filteredData = currentData.filter(
      (item) => !selectedIds.includes(item.id),
    );

    setData(filteredData);
    renderTable();

    if (allCheckbox) allCheckbox.checked = false;
  });

  historySort.addEventListener("change", (e) => {
    const sortType = e.target.value;
    const currentData = getData();
    const currentFilter = getFilterValues();

    if (!sortType) {
      renderTable(currentFilter);
      return;
    }

    const sortedData = currentData.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortType === "ascending" ? dateA - dateB : dateB - dateA;
    });

    renderTable(currentFilter, sortedData);
  });

  list.addEventListener("click", (e) => {
    const targetCell = e.target.closest("td");
    if (targetCell.cellIndex === 0) return;

    const row = targetCell.closest(".history__row");
    const id = Number(row.dataset.id);

    const item = getData().find((data) => data.id === id);
    if (item) {
      openDetailModal(item);
    }
  });
};
