/**
 * 필터와 관련한 기능을 관리하는 함수입니다.
 * 사용자가 입력한 값에 따라 필터링 폼 제출 또는 초기화 이벤트를 등록합니다.
 */

import { dom } from "../dom/selectors.js";
import { renderTable } from "./table.js";
import { getFilterValues } from "../utils/filter-value.js";

export const filter = () => {
  const { form, resetBtn } = dom.filter;
  const { historySort } = dom.history;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    historySort.value = "";

    // 필터링한 값 가져와서 테이블 다시 렌더링
    const currentFilter = getFilterValues();
    renderTable(currentFilter);
  });

  // 필터 초기화 버튼 이벤트 등록
  resetBtn.addEventListener("click", () => {
    form.reset();
    renderTable();
    historySort.value = "";
  });
};
