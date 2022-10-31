import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../modules/homeSlice';

const store = configureStore({
  reducer: { homeSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
