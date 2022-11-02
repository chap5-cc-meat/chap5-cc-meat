import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import { meatApi } from '../../tools/instance';
import axios from 'axios';
// import { create } from 'json-server';<=이거 절대 주석풀면x
//오류 46개 생기는데 잠시 메모해둘 생각인..

//initialState
const initialState = {
  carts: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __getItems = createAsyncThunk(
  'getItems/주문할 상품들',
  async (_, thunkAPI) => {
    const cookies = new Cookies();
    const token = cookies.get('token');
    console.log(token);
    const headers = {
      Authorization: `${token}`,
    };
    console.log(headers);
    try {
      // const { data } = await meatApi.getItems();
      const { data } = await axios.get('https://www.iceflower.shop/carts/', {
        headers,
      });
      console.log(data);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const __addBtn = createAsyncThunk(
//   'addcount/증가',
//   async (payload, thunkAPI) => {
//     try {
//       await axios.get
//     }
//   }
// )

export const __deleteItems = createAsyncThunk(
  'deleteItems/상품을 삭제',
  async (payload, thunkAPI) => {
    try {
      //payload = postId 를 받아 상품 삭제
      await meatApi.deleteItems(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    // addBtn: (state, action) => {
    //   state.carts
    // }
  },
  extraReducers: {
    //getItems
    [__getItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__getItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload;
    },
    [__getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //deleteItems
    [__deleteItems]: (state) => {
      state.isLoading = true;
    },
    [__deleteItems]: (state, action) => {
      state.isLoading = false;
      console.log(1);
      state.carts = state.carts.data.filter(
        (item) => item.cartId !== action.payload
      );
    },
    [__deleteItems]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = cartItemSlice.actions;
export default cartItemSlice.reducer;
