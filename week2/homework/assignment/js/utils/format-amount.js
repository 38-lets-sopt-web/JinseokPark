export const formatAmount = (amount, type) => {
  const isIncome = type === "income";
  const sign = isIncome ? "+" : "-";

  return {
    className: isIncome ? "amount-income" : "amount-expense",
    formattedAmount: `${sign}${amount.toLocaleString()}`,
  };
};
