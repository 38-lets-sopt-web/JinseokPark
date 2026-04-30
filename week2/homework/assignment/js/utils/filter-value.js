// 필터링 폼에서 사용자 입력 값을 수집하는 유틸 함수입니다.
import { dom } from "../dom/selectors.js";

/**
 * 필터 폼의 현재 입력값들을 객체 형태로 반환합니다.
 * @returns {{
 * title: string,    // 검색 제목 (소문자 변환 및 공백 제거)
 * type: string,     // 유형 (전체/수입/지출)
 * category: string, // 카테고리
 * payment: string   // 결제수단
 * }}
 */
export const getFilterValues = () => {
  const { inputs } = dom.filter;

  return {
    title: inputs.title.value.toLowerCase().trim(),
    type: inputs.type.value,
    category: inputs.category.value,
    payment: inputs.payment.value,
  };
};
