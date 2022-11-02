import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: [],
  isLoading: false,
  error: null,
};

export const __PostCart = createAsyncThunk(
  'Item/Post_Item_to_Cart',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.post(
        'https://www.spartaseosu.shop/carts/',
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const ItemSlice = createSlice({
  name: 'ItemSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__PostCart.pending]: (state) => {
      state.isLoading = true;
    },
    [__PostCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    },
    [__PostCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default ItemSlice.reducer;
