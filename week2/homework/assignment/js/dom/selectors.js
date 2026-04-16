export const dom = {
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
  history: {
    addBtn: document.querySelector(".history__button--add"),
    deleteBtn: document.querySelector(".history__button--delete"),
    list: document.getElementById("history-list"),
    allCheckbox: document.getElementById("check-all"),
    totalAmount: document.getElementById("total-amount"),
    historySort: document.getElementById("history-sort"),
  },
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
