import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import { meatApi } from '../../tools/instance';
import axios from 'axios';

//initialState
const initialState = {
  carts: [],
  itemAmount: 0,
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
      console.log(data.data);

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
      const cookies = new Cookies();
      const token = cookies.get('token');

      const { item } = await axios.delete('https://www.iceflower.shop/carts/', {
        data: { postId: payload },
        headers: {
          Authorization: `${token}`,
        },
      });
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
    addItemAmount: (state, action) => {
      state.itemAmount = state.itemAmount + action.payload;
    },
    MinusItemAmount: (state, action) => {
      state.itemAmount = state.itemAmount - action.payload;
    },
    setItemAmount: (state, action) => {
      state.itemAmount = action.payload;
    },
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
    [__deleteItems.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      const result = state.carts.data.filter((item) => {
        return item.postId !== action.payload;
      });
      console.log(state.carts.data);
      state.carts.data = result;
    },
    [__deleteItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addItemAmount, MinusItemAmount, setItemAmount } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
