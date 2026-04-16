import { CATEGORY_MAP, PAYMENT_MAP } from "../constants/options.js";
import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { renderTable } from "./table.js";

const { overlay, form, closeBtns } = dom.modal;

export const closeModal = () => {
  overlay.classList.remove("is-active", "is-add", "is-detail");
  form.reset();
};

export const openAddModal = () => {
  overlay.classList.add("is-active", "is-add");
  overlay.classList.remove("is-detail");
};

export const openDetailModal = (item) => {
  const { details } = dom.modal;
  const isIncome = item.type === "income";
  const sign = isIncome ? "+" : "-";

  details.title.textContent = item.title;
  details.amount.textContent = `${sign}${item.amount.toLocaleString()}원`;
  details.date.textContent = item.date;
  details.category.textContent = item.category;
  details.payment.textContent = item.payment;

  overlay.classList.add("is-active", "is-detail");
  overlay.classList.remove("is-add");
};

const handleAddSubmit = (e) => {
  e.preventDefault();
  const { inputs } = dom.modal;

  const newData = {
    id: Date.now(),
    title: inputs.title.value,
    amount: Number(inputs.amount.value),
    type: inputs.type.value,
    date: inputs.date.value,
    category: CATEGORY_MAP[inputs.category.value],
    payment: PAYMENT_MAP[inputs.payment.value],
  };

  const currentData = getData();
  setData([newData, ...currentData]);

  renderTable();
  closeModal();
};

export const modal = () => {
  const { addBtn } = dom.history;

  addBtn.addEventListener("click", openAddModal);
  form.addEventListener("submit", handleAddSubmit);

  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
};
