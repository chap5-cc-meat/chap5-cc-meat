import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';
import homeSlice from '../modules/homeSlice';
import detailSlice from '../modules/detailSlice';
import ItemSlice from '../modules/ItemSlice';

const store = configureStore({
  reducer: { homeSlice, signup: signUpSlice, detailSlice, ItemSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
