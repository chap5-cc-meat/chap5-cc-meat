import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { meatApi } from '../../tools/instance';

//initialState
const initialState = {
  carts: [],
  isLoading: false,
  isSuccess: false,
  error: false,
};

export const __getItems = createAsyncThunk(
  'getItems/주문할 상품들',
  async (payload, thunkAPI) => {
    try {
      const { data } = await meatApi.getItems(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteItems = createAsyncThunk(
  'deleteItems/상품을 삭제',
  async (payload, thunkAPI) => {
    try {
      //payload = postId 를 받아 상품 삭제
      await meatApi.deleteItems(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const CartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = CartItemsSlice.actions;
export default CartItemsSlice.reducer;
