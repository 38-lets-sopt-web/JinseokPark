import { expenses } from "../data/mock.js";

const STORAGE_KEY = "expense";

export const getData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const setData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const initData = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    setData(expenses);
  }
};
