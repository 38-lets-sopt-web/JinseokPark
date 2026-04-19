/**
 * 프로젝트 전반에서 사용되는 DOM 요소의 참조를 한번에 관리하는 객체입니다.
 * 매번 document.getElementById를 호출하지 않고, 이 객체를 import 하여 간단히 사용 가능합니다.
 */

export const dom = {
  // header: 새로고침 버튼
  header: {
    refreshBtn: document.querySelector(".header__refresh-button"),
  },
  // filter : 필터 폼, 초기화 버튼, 필터 인풋 객체
  filter: {
    form: document.getElementById("filter-form"),
    resetBtn: document.querySelector(".filter__button--reset"),
    inputs: {
      title: document.getElementById("filter-title"),
      type: document.getElementById("filter-type"),
      category: document.getElementById("filter-category"),
      payment: document.getElementById("filter-payment"),
    },
  },

  // history: 내역 추가 버튼, 선택 삭제 버튼, 테이블 리스트, 전체 체크 박스, 전체 금액 span, 날짜 순 정렬 select
  history: {
    addBtn: document.querySelector(".history__button--add"),
    deleteBtn: document.querySelector(".history__button--delete"),
    list: document.getElementById("history-list"),
    allCheckbox: document.getElementById("check-all"),
    totalAmount: document.getElementById("total-amount"),
    historySort: document.getElementById("history-sort"),
  },

  // modal: 내역 추가 모달, 세부 사항 모달, 내역 추가 폼, 모달 닫기 버튼, 내역 추가 폼 인풋 객체, 세부 사항 정보 관련 객체
  modal: {
    addDialog: document.getElementById("add-dialog"),
    detailDialog: document.getElementById("detail-dialog"),
    form: document.getElementById("add-form"),
    closeBtns: document.querySelectorAll(".modal__close"),

    inputs: {
      title: document.getElementById("modal-title"),
      amount: document.getElementById("modal-amount"),
      type: document.getElementById("modal-type"),
      date: document.getElementById("modal-date"),
      category: document.getElementById("modal-category"),
      payment: document.getElementById("modal-payment"),
    },

    details: {
      title: document.getElementById("detail-title"),
      amount: document.getElementById("detail-amount"),
      date: document.getElementById("detail-date"),
      category: document.getElementById("detail-category"),
      payment: document.getElementById("detail-payment"),
    },
  },
};
