import { Todo } from "../../models/Todo";
import * as TODO_CONSTANTS from "../constants/TODO_CONSTANTS";

export const initializeTodoState = () => ({
  type: TODO_CONSTANTS.INITIALIZE_TODO_STATE,
});

export const createTodo = (todo: Todo) => ({
  type: TODO_CONSTANTS.ADD_TODO,
  payload: { ...todo, id: new Date().getTime(), isCompleted: false },
});

export const toggleTodo = (id: number) => ({
  type: TODO_CONSTANTS.TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: number) => ({
  type: TODO_CONSTANTS.DELETE_TODO,
  payload: { id },
});
