import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../modules/signUpSlice';
import homeSlice from '../modules/homeSlice';
import cartItemSlice from '../modules/cartItemSlice';
import detailSlice from '../modules/detailSlice';
import ItemSlice from '../modules/ItemSlice';

const store = configureStore({
  reducer: {
    homeSlice,
    signup: signUpSlice,
    detailSlice,
    ItemSlice,
    cartItems: cartItemSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
