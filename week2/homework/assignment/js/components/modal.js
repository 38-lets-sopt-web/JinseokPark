import { CATEGORY_MAP, PAYMENT_MAP } from "../constants/options.js";
import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { renderTable } from "./table.js";

const { overlay, form } = dom.modal;

const openModal = () => {
  overlay.classList.add("is-active");
};

const closeModal = () => {
  overlay.classList.remove("is-active");
  form.reset();
};

export const modal = () => {
  const { addBtn } = dom.history;
  const { closeBtn } = dom.modal;

  addBtn.addEventListener("click", () => {
    openModal();
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("modal-title").value;
    const amount = Number(document.getElementById("modal-amount").value);
    const type = document.getElementById("modal-type").value;
    const date = document.getElementById("modal-date").value;
    const category = document.getElementById("modal-category").value;
    const payment = document.getElementById("modal-payment").value;

    const newData = {
      id: Date.now(),
      title,
      amount: type === "expense" ? -amount : amount,
      date,
      category: CATEGORY_MAP[category],
      payment: PAYMENT_MAP[payment],
    };

    const currentData = getData();
    setData([newData, ...currentData]);

    renderTable();
    closeModal();
  });
};
