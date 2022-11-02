import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __PostCart } from '../redux/modules/ItemSlice';
import { addItemCount } from '../redux/modules/ItemSlice';

const DetailContents = () => {
  const [count, setCount] = useState(1);
  const item = useSelector((state) => state.detailSlice.item.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const minusBtnHandler = () => {
    if (count < 2) {
      return;
    } else {
      setCount((count) => count - 1);
    }
  };

  const buyNowHandler = () => {
    dispatch(__PostCart({ amount: count, postId: item.postId }));
    dispatch(addItemCount(count));
    navigate('/Carts');
  };

  const addCartHandler = () => {
    dispatch(__PostCart({ amount: count, postId: item.postId }));
    dispatch(addItemCount(count));
    alert('장바구니에 추가하였습니다 ');
  };

  return (
    <ContentContainer>
      <ContentName>{item?.item}</ContentName>
      <ContentStandard>{item?.content}</ContentStandard>
      <ContentPrice>기준가 {item?.cost.toLocaleString()}원</ContentPrice>
      <ContentSplit />
      <ContentOption>
        <OptionText>옵션</OptionText>
        <DropDownDiv>
          <DropDownBtn>
            {item?.option}
            <DropDownIcon />
          </DropDownBtn>
        </DropDownDiv>
      </ContentOption>
      <CountDiv>
        <OptionText>수량</OptionText>
        <CountBtnDiv>
          <MinusBtn onClick={minusBtnHandler}>
            <MinusIcon />
          </MinusBtn>
          <CountNumber>{count}</CountNumber>
          <PlusBtn onClick={() => setCount((count) => count + 1)}>
            <PlusIcon />
          </PlusBtn>
        </CountBtnDiv>
      </CountDiv>
      <ItemCartBtns>
        <BuyNowBtn onClick={buyNowHandler}>바로구매</BuyNowBtn>
        <ItemCartBtn onClick={addCartHandler}>장바구니</ItemCartBtn>
      </ItemCartBtns>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin-top: 27px;
`;
const ContentName = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 41px;
  color: white;
  word-break: keep-all;
`;
const ContentStandard = styled.p`
  font-size: 16px;
  color: #9b9b9b;
  margin-top: 20px;
`;
const ContentPrice = styled.p`
  font-size: 24px;
  line-height: 33px;
  color: white;
  margin-top: 6px;
`;

const ContentSplit = styled.div`
  width: 380px;
  height: 1px;
  background-color: #4a4a4a;
  margin-top: 26px;
`;

const ContentOption = styled.div`
  display: flex;
  height: 52px;
  margin-top: 29px;
`;

const OptionText = styled.p`
  font-size: 18px;
  line-height: 33px;
  color: white;
  margin-top: 9px;
`;

const DropDownDiv = styled.div`
  width: 317px;
  border: 1px solid #7c7c7c;
  margin-left: 27px;

  z-index: 1;
`;

const DropDownBtn = styled.button`
  width: 315px;
  height: 50px;
  font-size: 16px;
  position: relative;
  background-color: #1c1c1c;
  color: white;
  border: none;
`;

const DropDownIcon = styled.i`
  width: 13px;
  height: 8px;
  bottom: 19px;
  right: 18px;
  position: absolute;
  display: block;

  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMgNy41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMyA3LjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojOTc5Nzk3O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEiIHkxPSIxIiB4Mj0iNi41IiB5Mj0iNi41Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEyIiB5MT0iMSIgeDI9IjYuNSIgeTI9IjYuNSIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=');

  background-repeat: no-repeat;
`;

const CountDiv = styled.div`
  display: flex;
  gap: 26px;
  overflow: hidden;
  text-align: center;
  margin-top: 19px;
`;

const CountBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const MinusBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #7c7c7c;
  background-color: #1c1c1c;
  display: block;
`;

const MinusIcon = styled.i`
  width: 21px;
  height: 3px;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIgMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIgMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiM5QjlCOUI7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMSIgeTE9IjEiIHgyPSIxMSIgeTI9IjEiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K');
  background-size: cover;
  background-repeat: no-repeat;
  top: -4px;
  position: relative;
  display: inline-block;
`;

const CountNumber = styled.div`
  width: 219px;
  height: 50px;
  border-top: 1px solid #7c7c7c;
  border-bottom: 1px solid #7c7c7c;
  line-height: 48px;
  font-size: 16px;
  color: white;
`;

const PlusBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #7c7c7c;
  background-color: #1c1c1c;
  display: block;
`;

const PlusIcon = styled.i`
  top: 4px;
  width: 18px;
  height: 18px;

  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyIDEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzlCOUI5QjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSI2IiB5MT0iMSIgeDI9IjYiIHkyPSIxMSIvPgoJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEiIHkxPSI2IiB4Mj0iMTEiIHkyPSI2Ii8+CjwvZz4KPC9zdmc+Cg==');
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  display: inline-block;
`;

const ItemCartBtns = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  bottom: 0;
  overflow: hidden;
`;
const BuyNowBtn = styled.button`
  background-color: #888888;

  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const ItemCartBtn = styled.button`
  background-color: #d0021b;
  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export default DetailContents;
