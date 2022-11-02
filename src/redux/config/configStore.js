import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';
import homeSlice from '../modules/homeSlice';
import cartItemSlice from '../modules/cartItemSlice';

const store = configureStore({
  reducer: { homeSlice, signup: signUpSlice, cartItems: cartItemSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
