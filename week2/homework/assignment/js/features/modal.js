import { CATEGORY_MAP, PAYMENT_MAP } from "../constants/options.js";
import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { renderTable } from "./table.js";
import { formatAmount } from "../utils/format-amount.js";

const { addDialog, detailDialog, form, closeBtns, details, inputs } = dom.modal;

export const closeModal = () => {
  addDialog.close();
  detailDialog.close();
  form.reset();
};

export const openAddModal = () => {
  addDialog.showModal();
};

export const openDetailModal = (item) => {
  const { formattedAmount } = formatAmount(item.amount, item.type);

  details.title.textContent = item.title;
  details.amount.textContent = `${formattedAmount}원`;
  details.date.textContent = item.date;
  details.category.textContent = item.category;
  details.payment.textContent = item.payment;

  detailDialog.showModal();
};

const handleAddSubmit = (e) => {
  e.preventDefault();

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

const handleBackdropClick = (dialog) => {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
};

export const modal = () => {
  const { addBtn } = dom.history;

  addBtn.addEventListener("click", openAddModal);
  form.addEventListener("submit", handleAddSubmit);

  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  handleBackdropClick(addDialog);
  handleBackdropClick(detailDialog);
};
