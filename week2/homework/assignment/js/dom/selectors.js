export const dom = {
  filter: {
    form: document.getElementById("filter-form"),
    resetBtn: document.querySelector(".filter__button--reset"),
  },
  history: {
    addBtn: document.querySelector(".history__button--add"),
    deleteBtn: document.querySelector(".history__button--delete"),
    list: document.getElementById("history-list"),
    allCheckbox: document.getElementById("check-all"),
    totalAmount: document.getElementById("total-amount"),
    historySort: document.getElementById("history-sort"),
  },
  modal: {
    overlay: document.getElementById("add-modal"),
    form: document.getElementById("add-form"),
    closeBtn: document.querySelector(".modal__close"),
  },
};
