import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./reducers";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
const mid = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  mid.push(logger);
}
export const store = configureStore({
  reducer: persistedReducer,
  middleware: mid,
});

export default store;
export const persistor = persistStore(store);
