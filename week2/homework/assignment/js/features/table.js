import { dom } from "../dom/selectors.js";
import { getData, setData } from "../store/storage.js";
import { PAYMENT_MAP, CATEGORY_MAP } from "../constants/options.js";

export const renderTable = (filterValues = null, sortedData = null) => {
  let data = sortedData || getData();
  const { list, totalAmount } = dom.history;

  if (filterValues) {
    data = data.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(filterValues.title);

      const matchType = !filterValues.type || item.type === filterValues.type;

      const matchCategory =
        !filterValues.category ||
        item.category === CATEGORY_MAP[filterValues.category];

      const matchPayment =
        !filterValues.payment ||
        item.payment === PAYMENT_MAP[filterValues.payment];

      return matchTitle && matchType && matchCategory && matchPayment;
    });
  }

  const total = data.reduce((acc, cur) => {
    return cur.type === "income" ? acc + cur.amount : acc - cur.amount;
  }, 0);

  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = '<tr><td colspan="6">내역이 없습니다.</td></tr>';
    if (totalAmount) {
      totalAmount.textContent = "0원";
      totalAmount.classList.remove("amount-income", "amount-expense");
    }
    return;
  }

  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = "history__row";
    tr.dataset.id = item.id;

    const isIncome = item.type === "income";
    const amountClass = isIncome ? "amount-income" : "amount-expense";
    const sign = isIncome ? "+" : "-";

    tr.innerHTML = `
        <td><input type="checkbox" class="history__checkbox" data-id="${item.id}" /></td>
        <td>${item.title}</td>
        <td class="${amountClass}">${sign}${item.amount.toLocaleString()}</td>
        <td>${item.date}</td>
        <td>${item.category}</td>
        <td>${item.payment}</td>
    `;

    list.appendChild(tr);
  });

  if (totalAmount) {
    const totalSign = total > 0 ? "+" : "";
    totalAmount.textContent = `${totalSign}${total.toLocaleString()}원`;

    totalAmount.classList.remove("amount-income", "amount-expense");

    if (total >= 0) {
      totalAmount.classList.add("amount-income");
    } else {
      totalAmount.classList.add("amount-expense");
    }
  }
};
