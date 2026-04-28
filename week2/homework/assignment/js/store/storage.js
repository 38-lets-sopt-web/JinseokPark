/**
 * 로컬 스토리지를 이용한 데이터 관리를 위한 함수입니다.
 * 데이터를 브라우저에 저장하고 불러오는 기능을 수행합니다.
 */

import { expenses } from "../data/mock.js";

// 상수 - 로컬 스토리지에서 사용할 키 값
const STORAGE_KEY = "expense";

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
 * 초기 데이터를 설정합니다.
 * 로컬 스토리지에 데이터가 없는 경우에만 mock 데이터를 저장합니다.
 */
export const initData = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    setData(expenses);
  }
};
