import { initData } from "./store/storage.js";
import { renderTable } from "./features/table.js";
import { header } from "./features/header.js";
import { modal } from "./features/modal.js";
import { filter } from "./features/filter.js";
import { history } from "./features/history.js";

const init = () => {
  // 초기 데이터 불러오기
  initData();

  // 로컬 스토리지 기반 테이블 렌더링
  renderTable();

  // 각 컴포넌트 별 이벤트 바인딩
  header();
  modal();
  filter();
  history();
};

document.addEventListener("DOMContentLoaded", init);
