import todoReducers from "./reducers/todoReducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
  reducer: { todoReducers },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;