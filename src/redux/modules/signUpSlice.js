//Thusnk 함수

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { meatApi } from '../../tools/instance';

export const __submitBtn = createAsyncThunk(
  'post/submitBtn',
  async (payload, thunkAPI) => {
    try {
      const { data } = await meatApi.postSignUps(payload);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      // console.log(err.response.data.err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// {ok: 0, statusCode: 412, err: '이미 가입된 이메일 혹은 닉네임이 존재합니다.'}

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
  reducers: {
    submitBtn: (state, action) => {
      return { info: [...state.infos, action.payload] };
    },
  },
  extraReducers: {
    [__submitBtn.pending]: (state) => {
      // console.log(1);
      state.isLoading = true;
    },
    [__submitBtn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.infos = action.payload;
      const isOk = state.infos.ok;
      // console.log(isOk);
      // const isMsg = state.infos.data.message;
      // if (isOk === true && isMsg === '회원가입성공') {
      if (isOk === true) {
        alert('로그인출발~');
        window.location.href = '/Login';
      }
    },
    [__submitBtn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      const statusCode = state.error.response.status;
      const errMsg = state.error.response.data.err;
      statusCode === 412 &&
      errMsg === '이미 가입된 이메일 혹은 닉네임이 존재합니다.' ? (
        alert('이미 가입된 이메일 혹은 닉네임이 존재합니다.')
      ) : (
        <></>
      );

      statusCode === 412 &&
      errMsg === '비밀번호는 최소 4자리수를 넘겨주세요' ? (
        alert('비밀번호는 최소 4자리수를 넘겨주세요')
      ) : (
        <></>
      );
    },
  },
});

export const { addBtn } = signUpSlice.actions;
export default signUpSlice.reducer;
