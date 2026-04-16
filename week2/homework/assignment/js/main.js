import { initData } from "./store/storage.js";
import { renderApp } from "./app/render.js";
import { setEvents } from "./app/event.js";

const init = () => {
  initData();
  renderApp();
  setEvents();
};

document.addEventListener("DOMContentLoaded", init);
