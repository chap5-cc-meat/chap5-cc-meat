import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';
import homeSlice from '../modules/homeSlice';

const store = configureStore({
  reducer: { homeSlice, signup: signUpSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
