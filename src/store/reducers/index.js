import { combineReducers } from "redux";
import authReducer from "./auth.reducer/auth.reducer";
import todoReducer from "./todo.reducer/todo.reducer";
import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export {rootReducer}
export const persistedReducer = persistReducer(persistConfig, rootReducer);
