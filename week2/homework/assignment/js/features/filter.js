/**
 * 필터와 관련한 기능을 관리하는 함수입니다.
 * 사용자가 입력한 값에 따라 필터링 폼 제출 또는 초기화 이벤트를 등록합니다.
 */

import { dom } from "../dom/selectors.js";
import { renderTable } from "./table.js";
import { getFilterValues } from "../utils/filter-value.js";

export const filter = () => {
  // dom 객체에서 필요한 요소 가져오기
  const { form, resetBtn } = dom.filter;
  const { historySort } = dom.history;

  // 필터 폼 제출 이벤트 등록
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // 폼 제출 시 전체 페이지 새로고침 방지

    historySort.value = ""; // 기존 정렬 상태 초기화(날짜 오름/내림차순)

    // 필터링한 값 가져와서 테이블 다시 렌더링
    const currentFilter = getFilterValues();
    renderTable(currentFilter);
  });

  // 필터 초기화 버튼 이벤트 등록
  resetBtn.addEventListener("click", () => {
    form.reset(); // 입력 필드 초기화
    renderTable(); // 테이블 다시 렌더링
    historySort.value = ""; // 기존 정렬 상태 초기화(날짜 오름/내림차순)
  });
};
