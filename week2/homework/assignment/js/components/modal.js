import { dom } from "../dom/selectors.js";

export const modal = () => {
  const { addBtn } = dom.history;
  const { overlay, closeBtn } = dom.modal;

  addBtn.addEventListener("click", () => {
    overlay.classList.add("is-active");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("is-active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("is-active");
    }
  });
};
