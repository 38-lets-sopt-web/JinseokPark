import { dom } from "../dom/selectors.js";

export const getFilterValues = () => {
  const { form } = dom.filter;

  return {
    title: form.querySelector("#filter-title").value.toLowerCase(),
    type: form.querySelector("#filter-type").value,
    category: form.querySelector("#filter-category").value,
    payment: form.querySelector("#filter-payment").value,
  };
};
