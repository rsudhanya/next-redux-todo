const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");

import { AnyAction } from "redux";
import { Todo } from "../../models/Todo";
import * as TODO_CONSTANTS from "../constants/TODO_CONSTANTS";

const CRYPTO_SALT = "CRYPTO_SALT";
const TODO_STATE = "todo_state";

const saveStateInLocalStorage = (state: Todo[]) => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(
        TODO_STATE,
        AES.encrypt(serializedState, CRYPTO_SALT)
      );
    } catch (error) {
      console.log(error);
    }
  }
};

const getInitialState = () => {
  const initalTodos: Todo[] = [];
  if (typeof window !== "undefined") {
    try {
      const cipherSerializedState = localStorage.getItem(TODO_STATE);
      if (cipherSerializedState === null) {
        return initalTodos;
      }

      const bytes = AES.decrypt(cipherSerializedState.toString(), CRYPTO_SALT);
      const serializedState = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(serializedState);
    } catch (error) {
      console.log(error);
    }
  }
  return initalTodos;
};

export const todoReducers = (state: Todo[] = [], action: AnyAction) => {
  let reducedState: Todo[];
  switch (action.type) {
    case TODO_CONSTANTS.INITIALIZE_TODO_STATE:
      reducedState = [...getInitialState()];
      break;

    case TODO_CONSTANTS.ADD_TODO:
      reducedState = [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        },
      ];
      saveStateInLocalStorage(reducedState);
      break;

    case TODO_CONSTANTS.TOGGLE_TODO:
      reducedState = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      saveStateInLocalStorage(reducedState);
      break;

    case TODO_CONSTANTS.DELETE_TODO:
      reducedState = state.filter((todo) => todo.id !== action.payload.id);
      saveStateInLocalStorage(reducedState);
      break;

    default:
      reducedState = state;
      break;
  }
  return reducedState;
};
