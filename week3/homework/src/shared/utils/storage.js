// 상수 - 로컬 스토리지에서 사용할 키 값
const STORAGE_KEY = "ranking";

/**
 * 로컬 스토리지에서 전체 내역 데이터를 가져옵니다.
 * @returns {Array} 저장된 데이터 배열 (없을 경우 빈 배열 반환)
 */
export const getData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * 새로운 데이터 배열을 로컬 스토리지에 저장합니다.
 * @param {Array} data - 저장할 전체 데이터 배열
 */
export const setData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/**
 * 새로운 게임 기록을 로컬 스토리지에 추가하고 점수순으로 정렬하여 저장합니다.
 * * @param {Object} newItem - 추가할 게임 기록 객체
 * @param {number} newItem.level - 달성한 게임 레벨
 * @param {number} newItem.score - 최종 획득 점수
 * @example
 * addData({ level: 1, score: 150 });
 */
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

  const sortedData = newData.sort((a, b) => b.score - a.score);

  setData(sortedData);
};
