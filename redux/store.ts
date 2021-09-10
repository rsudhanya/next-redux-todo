import { createStore, applyMiddleware, AnyAction } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV === "development") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return reducers(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

export const nextReduxStoreWrapper = createWrapper(initStore);
