import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const initialState = {
  itemCount: 0,
  isLoading: false,
  error: null,
};

export const __PostCart = createAsyncThunk(
  'Item/Post_Item_to_Cart',
  async (payload, thunkAPI) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const headers = {
      Authorization: `${token}`,
    };
    try {
      const { data } = await axios.post(
        'https://www.iceflower.shop/carts',
        payload,
        { headers }
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
  reducers: {
    addItemCount: (state, action) => {
      state.itemCount = state.itemCount + action.payload;
    },
  },
  extraReducers: {
    [__PostCart.pending]: (state) => {
      state.isLoading = true;
    },
    [__PostCart.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__PostCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { addItemCount } = ItemSlice.actions;
export default ItemSlice.reducer;
