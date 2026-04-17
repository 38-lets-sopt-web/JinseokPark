/**
 * 필터링 또는 정렬 조건에 따라 테이블을 렌더링합니다.
 * 전체 금액을 계산하여 테이블에 함께 렌더링합니다.
 */

import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { PAYMENT_MAP, CATEGORY_MAP } from "../constants/options.js";
import { formatAmount } from "../utils/format-amount.js";

/**
 * 조건에 맞는 테이블 리스트와 총 합계를 화면에 렌더링합니다.
 * @param {Object|null} filterValues - 적용할 필터 조건 객체
 * @param {Array|null} sortedData - 정렬이 완료된 데이터 배열
 */
export const renderTable = (filterValues = null, sortedData = null) => {
  // 정렬된 데이터가 있으면 사용, null이면 로컬 스토리지에서 가져오기
  let data = sortedData || getData();
  const { list, totalAmount } = dom.history;

  // 필터 조건이 null이 아닌 경우, 즉 조건이 존재하면 데이터를 필터링
  if (filterValues) {
    data = data.filter((item) => {
      // 제목 포함 여부
      const matchTitle = item.title.toLowerCase().includes(filterValues.title);

      // 유형 일치 여부
      const matchType = !filterValues.type || item.type === filterValues.type;

      // 카테고리 일치 여부 (상수로 정의해둔 데이터 매핑 객체 활용)
      const matchCategory =
        !filterValues.category ||
        item.category === CATEGORY_MAP[filterValues.category];

      // 결제수단 일치 여부 (상수로 정의해둔 데이터 매핑 객체 활용)
      const matchPayment =
        !filterValues.payment ||
        item.payment === PAYMENT_MAP[filterValues.payment];

      return matchTitle && matchType && matchCategory && matchPayment;
    });
  }

  // 전체 금액 계산(reduce 활용)
  const total = data.reduce((acc, cur) => {
    return cur.type === "income" ? acc + cur.amount : acc - cur.amount;
  }, 0);

  // 기존 리스트 요소 초기화
  list.innerHTML = "";

  // 만약 데이터가 한 개도 없으면, 안내 메시지 및 합계 0원으로 안내 (early return)
  if (data.length === 0) {
    list.innerHTML = '<tr><td colspan="6">내역이 없습니다.</td></tr>';
    totalAmount.textContent = "0원";
    totalAmount.classList.remove("amount-income", "amount-expense");
    return;
  }

  // 데이터가 있다면 테이블 렌더링
  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = "history__row";
    tr.dataset.id = item.id; // 열 클릭 시 id 전달을 위해 tr.dataset에 저장

    // 유틸 함수 활용 금액 데이터 포맷팅
    const { className, formattedAmount } = formatAmount(item.amount, item.type);

    tr.innerHTML = `
        <td><input type="checkbox" class="history__checkbox" data-id="${item.id}" /></td>
        <td>${item.title}</td>
        <td class="${className}">${formattedAmount}</td>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.payment}</td>
    `;

    list.appendChild(tr);
  });

  // 총 합계 금액 업데이트
  const totalType = total >= 0 ? "income" : "expense";

  // 유틸 함수 활용 전체 금액 데이터 포맷팅
  const { className, formattedAmount } = formatAmount(
    Math.abs(total),
    totalType,
  );

  // 0원일 때는 부호 붙지 않게 설정
  totalAmount.textContent = total === 0 ? "0원" : formattedAmount;

  // 기존 클래스명 삭제하고 현재 금액에 맞는 클래스명 적용
  totalAmount.classList.remove("amount-income", "amount-expense");
  totalAmount.classList.add(className);
};
