import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { PAYMENT_MAP, CATEGORY_MAP } from "../constants/options.js";

export const renderTable = (filterValues = null) => {
  let data = getData();
  const { list } = dom.history;

  if (filterValues) {
    data = data.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(filterValues.title);

      const matchType =
        !filterValues.type ||
        (filterValues.type === "income" ? item.amount > 0 : item.amount < 0);

      const matchCategory =
        !filterValues.category ||
        item.category === CATEGORY_MAP[filterValues.category];

      const matchPayment =
        !filterValues.payment ||
        item.payment === PAYMENT_MAP[filterValues.payment];

      return matchTitle && matchType && matchCategory && matchPayment;
    });
  }

  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = '<tr><td colspan="6" >해당하는 내역이 없습니다.</td></tr>';
    return;
  }

  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = "history__row";

    tr.innerHTML = `
        <td><input type="checkbox" class="history__checkbox" data-id="${item.id}" /></td>
        <td>${item.title}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.payment}</td>
    `;

    list.appendChild(tr);
  });
};
