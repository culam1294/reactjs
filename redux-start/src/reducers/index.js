import { combineReducers } from "redux";
import login from "./IsLogin";
import list from "./List";
import selectMenu from "./SelectMenu";

const joinReducers = combineReducers({
  login: login,
  list: list,
  selectMenu: selectMenu,
});
export default joinReducers;
