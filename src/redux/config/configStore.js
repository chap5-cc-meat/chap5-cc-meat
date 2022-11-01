import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';

const store = configureStore({
  reducer: { signup: signUpSlice },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
