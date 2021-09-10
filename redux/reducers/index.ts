import { combineReducers } from "redux";
import { todoReducers } from "./todoReducers";

const reducers = combineReducers({
  todos: todoReducers,
});

export default reducers;
