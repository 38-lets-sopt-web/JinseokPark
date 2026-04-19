/**
 * 헤더 관련 이벤트를 등록합니다.
 * 과제 명세에 맞춰서 좌측 로고 클릭 시 페이지 새로고침을 진행합니다.
 */
import { dom } from "../dom/selectors.js";

export const header = () => {
  const { refreshBtn } = dom.header;

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      window.location.reload(); // 페이지 새로고침
    });
  }
};
