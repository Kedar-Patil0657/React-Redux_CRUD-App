import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers";
import { combineReducers } from "@reduxjs/toolkit";

const c = combineReducers({ counter });
const store = configureStore({ reducer: c });

export default store;
