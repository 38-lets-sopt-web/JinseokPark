/**
 * 내역 추가 및 상세 조회 모달의 동작을 관리하는 함수입니다.
 * 모달의 열기/닫기, 데이터 저장, 백드롭 클릭, 추가 내역 폼 제출 등을 처리합니다.
 */

import { CATEGORY_MAP, PAYMENT_MAP } from "../constants/options.js";
import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { renderTable } from "./table.js";
import { formatAmount } from "../utils/format-amount.js";

const { addDialog, detailDialog, form, closeBtns, details, inputs } = dom.modal;

// 모든 모달을 닫고, 추가 내역 등록 폼을 초기화합니다.
export const closeModal = () => {
  addDialog.close();
  detailDialog.close();
  form.reset();
};

// 내역 등록 모달을 여는 함수입니다.
export const openAddModal = () => {
  addDialog.showModal();
};

/**
 * 상세 조회 모달을 여는 함수입니다.
 * @param {Object} item - 표시할 내역 객체
 */
export const openDetailModal = (item) => {
  const { formattedAmount } = formatAmount(item.amount, item.type);

  // 상세 조회 모달 내 각 요소에 데이터 매핑
  details.title.textContent = item.title;
  details.amount.textContent = `${formattedAmount}원`;
  details.date.textContent = item.date;
  details.category.textContent = item.category;
  details.payment.textContent = item.payment;

  // 상세 조회 모달 열기
  detailDialog.showModal();
};

// 내역 추가 모달 내부 폼 제출을 처리
const handleAddSubmit = (e) => {
  e.preventDefault();

  // 입력 인풋 중 비어있는 곳이 있다면 alert
  if (!form.checkValidity()) {
    alert("모든 필드를 입력해주세요.");
    form.reportValidity();
    return;
  }

  // 사용자의 입력 값을 바탕으로 새로운 데이터 객체 생성
  const newData = {
    id: Date.now(),
    title: inputs.title.value,
    amount: Number(inputs.amount.value),
    type: inputs.type.value,
    date: inputs.date.value,
    // 카테고리, 결제 수단은 데이터 매핑 객체 활용하여 한글로 변환하여 저장
    category: CATEGORY_MAP[inputs.category.value],
    payment: PAYMENT_MAP[inputs.payment.value],
  };

  const currentData = getData();
  // 기존 데이터 + 새로운 데이터 배열을 로컬 스토리지에 저장
  setData([newData, ...currentData]);

  // 테이블 다시 렌더링, 모달 닫기
  renderTable();
  closeModal();
};

/**
 * 모달 외부(흐리게 처리된 배경) 클릭 시 모달 닫기
 * @param {HTMLDialogElement} dialog - 대상 다이얼로그 요소 (내역 추가 모달 or 상세 조회 모달 dialog)
 */
const handleBackdropClick = (dialog) => {
  dialog.addEventListener("click", (e) => {
    // 배경이 클릭되었을 때 모달 닫기
    if (e.target === dialog) {
      closeModal();
    }
  });
};

/**
 * 위에서 정의한 여러 이벤트 관련 함수들을 아래 함수에서 통합 관리합니다.
 * 최종적으로 엔트리 포인트(main.js)에는 아래 함수만 사용합니다.
 */
export const modal = () => {
  const { addBtn } = dom.history;

  // '추가' 버튼 클릭 시 내역 추가 모달 열기
  addBtn.addEventListener("click", openAddModal);
  // 내역 추가 폼 제출 시 앞서 정의해둔 handleAddSubmit 실행
  form.addEventListener("submit", handleAddSubmit);

  // 두 개의 모달 중 어떤 닫기 버튼을 클릭해도 모달 닫기
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  // 백드롭 클릭 시 모달 닫기
  handleBackdropClick(addDialog);
  handleBackdropClick(detailDialog);
};
