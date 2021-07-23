import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);
