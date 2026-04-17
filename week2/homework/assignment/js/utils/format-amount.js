// 금액의 유형(수입/지출)에 따라 데이터를 포맷팅하고, 스타일링을 위한 className을 반환합니다.

/**
 * 금액을 수입/지출 유형에 따라 포맷팅하고 관련 CSS 클래스명을 반환합니다.
 * @param {number} amount - 포맷팅할 금액
 * @param {'income' | 'expense'} type - 내역 유형
 * @returns {{
 * className: string,      // 수입/지출에 따른 클래스명
 * formattedAmount: string // +/-가 포함된 포맷팅된 문자열
 * }}
 */
export const formatAmount = (amount, type) => {
  const isIncome = type === "income";
  const sign = isIncome ? "+" : "-";

  return {
    // 수입, 지출에 따른 색상 구분을 위한 클래스명
    className: isIncome ? "amount-income" : "amount-expense",
    // 부호 결합 및 천 단위 콤마 적용(데이터 포맷팅)
    formattedAmount: `${sign}${amount.toLocaleString()}`,
  };
};
