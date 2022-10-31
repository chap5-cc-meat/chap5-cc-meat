import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bannerClose: false,
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default homeSlice.reducer;
