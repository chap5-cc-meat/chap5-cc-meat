import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
