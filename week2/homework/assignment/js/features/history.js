/**
 * 하단 가계부 목록의 여러 이벤트를 관리하는 함수입니다.
 * 테이블 렌더링 기능은 제외(테이블 렌더링 관련 로직은 table.js에서 관리)
 * 전체 선택, 선택 삭제, 날짜순 정렬 및 상세 보기 기능을 포함합니다.
 */

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

  // 개별 체크박스 상태에 따른 전체 체크박스 동기화 이벤트
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

  // 선택 항목 제거 이벤트
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

    allCheckbox.checked = false;
  });

  // 날짜 순 정렬 이벤트
  historySort.addEventListener("change", (e) => {
    const sortType = e.target.value;
    const currentData = getData();
    const currentFilter = getFilterValues();

    // 정렬이 '전체'일 경우, 현재 필터링 조건으로만 테이블 렌더링
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

  // 테이블에서 행 클릭 시 상세보기 모달 오픈 이벤트
  list.addEventListener("click", (e) => {
    const targetCell = e.target.closest("td");
    if (!targetCell || targetCell.cellIndex === 0) return; // 체크박스 셀은 제외

    const row = targetCell.closest(".history__row");
    const id = Number(row.dataset.id);

    const item = getData().find((data) => data.id === id);
    if (item) {
      openDetailModal(item);
    }
  });
};
