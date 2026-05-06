const STORAGE_KEY = "userId";

export const setUserId = (id: number) => {
  localStorage.setItem(STORAGE_KEY, String(id));
};

export const getUserId = () => {
  const id = localStorage.getItem(STORAGE_KEY);
  return id ? Number(id) : null;
};

export const removeUserId = () => {
  localStorage.removeItem(STORAGE_KEY);
};
