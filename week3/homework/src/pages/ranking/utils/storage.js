const STORAGE_KEY = "ranking";

export const getData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const setData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addData = (newItem) => {
  const prevData = getData();
  const formattedDate = new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const newData = [...prevData, { ...newItem, date: formattedDate }];

  const sortedData = newData.sort((a, b) => {
    if (b.level !== a.level) {
      return b.level - a.level;
    }

    return b.score - a.score;
  });

  setData(sortedData);
};
