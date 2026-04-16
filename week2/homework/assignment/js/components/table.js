import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";

export const renderTable = () => {
  const data = getData();
  const { list } = dom.history;

  list.innerHTML = "";

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
