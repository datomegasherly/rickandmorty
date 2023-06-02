import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

const appDispatch = store;

export type AppDispatch = typeof appDispatch.dispatch;
export type RootState = ReturnType<typeof appDispatch.getState>;

export default store;
