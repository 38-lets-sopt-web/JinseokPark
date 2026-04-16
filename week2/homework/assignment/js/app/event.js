import { modal } from "../features/modal.js";
import { filter } from "../features/filter.js";
import { history } from "../features/history.js";

export const setEvents = () => {
  modal();
  filter();
  history();
};
