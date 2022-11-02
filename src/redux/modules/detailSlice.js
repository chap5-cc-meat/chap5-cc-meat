import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: [],
  isLoading: false,
  error: null,
};

export const __getAnItem = createAsyncThunk(
  'detail/get_an_item',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://www.iceflower.shop/posts/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const detailSlice = createSlice({
  name: 'detailSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__getAnItem.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAnItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    },
    [__getAnItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default detailSlice.reducer;
