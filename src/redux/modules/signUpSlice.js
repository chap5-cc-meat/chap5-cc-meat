//Thusnk 함수

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { meatApi } from '../../tools/instance';

export const __submitBtn = createAsyncThunk(
  'post/submitBtn',
  async (payload, thunkAPI) => {
    try {
      const { data } = await meatApi.postSignUps(payload);
      console.log(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  infos: [],
  isLoading: false,
  isSuccess: false,
  error: {},
};
//export 기능이 만들어지면 리듀서
const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducer: {
    submitBtn: (state, action) => {
      return { info: [...state.infos, action.payload] };
    },
  },
  extraReducer: {
    [__submitBtn.pending]: (state) => {
      state.isLoading = true;
    },
    [__submitBtn.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.infos = action.payload;
      const isOk = state.infos.ok;
      console.log(isOk);
      if (isOk === true) {
        alert('성공!');
        // window.location.href = '/Login';
      }
    },
    [__submitBtn.rejected]: (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
      console.log(state.error, action, action.payload);
    },
  },
});

export default signUpSlice.reducer;
