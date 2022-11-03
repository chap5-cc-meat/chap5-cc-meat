import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import minus from '../assets/data_minus.svg';
import plus from '../assets/data_plus.svg';
import itemdel from '../assets/data_itemclose.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemAmount,
  MinusItemAmount,
  __deleteItems,
} from '../redux/modules/cartItemSlice';
import axios from 'axios';

const CartIem = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(items.amount);

  //더하기, 빼기 버튼 컴포넌트 따로
  //빼기 버튼
  const minusBtn = () => {
    if (amount < 2) {
      return;
    } else {
      setAmount(amount - 1);
      dispatch(MinusItemAmount(items.cost));
    }
  };

  const plusBtn = () => {
    setAmount(amount + 1);
    dispatch(addItemAmount(items.cost));
  };

  const delBtnHandler = (e) => {
    e.preventDefault();
    // console.log(1);
    //window.confirm('삭제하시겠어요?');
    dispatch(__deleteItems(items.postId));
  };

  return (
    <div>
      <li
        key={items.cartId}
        className="relative flex items-center h-[147px] border-b-[1px] border-solid border-[#e1dedf] text-center"
      >
        <img
          src={items.imgUrl}
          alt="items"
          className="block w-[109px] h-[109px] ml-[24px] aspect-[auto 109/109]"
        />
        <div className="w-[284px] ml-[53px] flex flex-col list-none box-border">
          <p className="block text-[16px] text-left leading-[24px] cursor-pointer">
            {items.title}
          </p>
          <p className="text-left text-[13px] leading-[24px] text-[#9b9b9b]">
            보통(16mm)
          </p>
        </div>
        {/* 장바구니 수량 변경 */}
        <div className="w-[80px] text-[14px] leading-[24px] text-[#9b9b9b] text-center">
          {items.option}
        </div>
        <div className="w-[118px] h-[38px] border border-[1px] border-[#dcdcdc] text-center">
          <ButtonMinus onClick={minusBtn}>
            <img
              src={minus}
              alt="minus"
              className="block w-[12px] h-[12px] ml-[16px] mt-[14px] italic "
            />
          </ButtonMinus>
          <p className="float-left w-[24%] leading-[38px] text-center">
            {amount}
          </p>
          <ButtonPlus onClick={plusBtn}>
            <img
              src={plus}
              alt="plus"
              className="block w-[12px] h-[12px] ml-[16px] mt-[14px] italic"
            />
          </ButtonPlus>
        </div>
        <div className="w-[143px] ml-[8px] text-[16px] leading-[24px] text-center outline-0 list-none">
          <span className="leading-[24px] text-[16px] text-center outline-0">
            {(items.cost * amount).toLocaleString()}원
          </span>
        </div>
        <button
          onClick={delBtnHandler}
          className="w-[40px] h-[40px] ml-[-1px] text-center border-0 outline-0 font-sans cursor-pointer "
        >
          <img src={itemdel} alt="itemdel" />
        </button>
      </li>
    </div>
  );
};

export default CartIem;

//더하기 버튼
const ButtonPlus = styled.div`
  float: left;
  width: 44px;
  height: 100%;
  cursor: pointer;
`;

//빼기 버튼
const ButtonMinus = styled.div`
  float: left;
  width: 44px;
  height: 100%;
  outline: 0;
  cursor: pointer;
`;
