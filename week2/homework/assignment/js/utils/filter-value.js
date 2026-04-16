import { dom } from "../dom/selectors.js";

export const getFilterValues = () => {
  const { inputs } = dom.filter;

  return {
    title: inputs.title.value.toLowerCase().trim(),
    type: inputs.type.value,
    category: inputs.category.value,
    payment: inputs.payment.value,
  };
};
