import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemCount, __PostCart } from '../redux/modules/ItemSlice';

const ItemModal = (props) => {
  const [count, setCount] = useState(1);
  const {
    cost = 48000,
    item = '한우 등심',
    option = '구이용',
    postId,
  } = props.product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //모달 오픈, 닫기 시 위치 고정
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const minusBtnHandler = () => {
    if (count < 2) {
      return;
    } else {
      setCount((count) => count - 1);
    }
  };

  const closeBtnHandler = () => {
    props.closeModal();
  };

  const buyNowHandler = () => {
    dispatch(__PostCart({ amount: count, postId: postId }));
    dispatch(addItemCount(count));
    navigate('/Carts');
  };

  const addCartHandler = () => {
    dispatch(__PostCart({ amount: count, postId: postId }));
    dispatch(addItemCount(count));
    props.closeModal();
  };

  return (
    <ModalContainer>
      <ModalBackGround onClick={closeBtnHandler}>
        <ItemModalDiv onClick={(e) => e.stopPropagation()}>
          <CloseBtn onClick={closeBtnHandler}></CloseBtn>
          <ItemName>{item}</ItemName>
          <CountDiv>
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
          <OptionChoice>옵션선택</OptionChoice>
          <DropDownDiv>
            <DropDownBtn>
              {option}
              <DropDownIcon />
            </DropDownBtn>
          </DropDownDiv>
          <ItemPrice>{(cost * count).toLocaleString()}원</ItemPrice>
          <ItemCartBtns>
            <BuyNowBtn onClick={buyNowHandler}>바로구매</BuyNowBtn>
            <ItemCartBtn onClick={addCartHandler}>장바구니</ItemCartBtn>
          </ItemCartBtns>
        </ItemModalDiv>
      </ModalBackGround>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  opacity: 1;
`;

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemModalDiv = styled.div`
  width: 500px;
  height: 390px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgb(27 33 58 / 40%);
  padding: 0;
  position: relative;
`;

const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: calc(100% - 20px);
  margin-top: -20px;
  z-index: 1;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwIDQwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzRfKTt9Cgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKTt9CgkKCQkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzhfKTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8ZGVmcz4KCQkJPGVsbGlwc2UgaWQ9IlNWR0lEXzFfIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjeD0iMjAiIGN5PSIyMCIgcng9IjIwIiByeT0iMjAiLz4KCQk8L2RlZnM+CgkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yXyI+CgkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJPC9jbGlwUGF0aD4KCQk8ZyBjbGFzcz0ic3QwIj4KCQkJPGRlZnM+CgkJCQk8cmVjdCBpZD0iU1ZHSURfM18iIHg9Ii0xMTY1LjMiIHk9Ii0zNzEuMyIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTU2NiIvPgoJCQk8L2RlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNF8iPgoJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfM18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQkJPC9jbGlwUGF0aD4KCQkJPHJlY3QgeD0iLTUiIHk9Ii01IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC04LjI4NDMgMjApIiBjbGFzcz0ic3QxIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzVfIiBkPSJNMjAsMTguNGwtNS43LTUuN2MtMC40LTAuNC0xLTAuNC0xLjQsMGMtMC40LDAuNC0wLjQsMSwwLDEuNGw1LjcsNS43bC01LjcsNS43Yy0wLjQsMC40LTAuNCwxLDAsMS40CgkJCQljMC40LDAuNCwxLDAuNCwxLjQsMGw1LjctNS43bDUuNyw1LjdjMC40LDAuNCwxLDAuNCwxLjQsMGMwLjQtMC40LDAuNC0xLDAtMS40bC01LjctNS43bDUuNy01LjdjMC40LTAuNCwwLjQtMSwwLTEuNAoJCQkJYy0wLjQtMC40LTEtMC40LTEuNCwwTDIwLDE4LjR6Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF81XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MiI+CgkJCTxkZWZzPgoJCQkJPHJlY3QgaWQ9IlNWR0lEXzdfIiB4PSItMTE2NS4zIiB5PSItMzcxLjMiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjE1NjYiLz4KCQkJPC9kZWZzPgoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj4KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzdfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJCTwvY2xpcFBhdGg+CgkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMCwxOC40bC01LjctNS43Yy0wLjQtMC40LTEtMC40LTEuNCwwYy0wLjQsMC40LTAuNCwxLDAsMS40bDUuNyw1LjdsLTUuNyw1LjdjLTAuNCwwLjQtMC40LDEsMCwxLjQKCQkJCWMwLjQsMC40LDEsMC40LDEuNCwwbDUuNy01LjdsNS43LDUuN2MwLjQsMC40LDEsMC40LDEuNCwwYzAuNC0wLjQsMC40LTEsMC0xLjRsLTUuNy01LjdsNS43LTUuN2MwLjQtMC40LDAuNC0xLDAtMS40CgkJCQljLTAuNC0wLjQtMS0wLjQtMS40LDBMMjAsMTguNHoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==');
`;

const ItemName = styled.h3`
  margin-top: 18px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const CountDiv = styled.div`
  overflow: hidden;
  text-align: center;
  margin-top: 38px;
`;

const CountBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const MinusBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #e1dedf;
  background-color: #fff;
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
  width: 298px;
  height: 50px;
  border-top: 1px solid #e1dedf;
  border-bottom: 1px solid #e1dedf;
  line-height: 48px;
  font-size: 18px;
`;

const PlusBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #e1dedf;
  background-color: #fff;
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

const OptionChoice = styled.p`
  display: flex;

  margin-left: 51px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const DropDownDiv = styled.div`
  width: 398px;
  border: 1px solid #e1dedf;
  margin-left: 51px;
  margin-top: 6px;
  z-index: 1;
  position: relative;
`;

const DropDownBtn = styled.button`
  width: 396px;
  height: 50px;
  font-size: 18px;
  line-height: 1.33;
  position: relative;
  background-color: #fff;
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

const ItemPrice = styled.p`
  position: absolute;
  top: 280px;
  right: 51px;
  z-index: 0;
  font-size: 24px;
  font-weight: 700;
`;

const ItemCartBtns = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
`;
const BuyNowBtn = styled.button`
  background-color: #acacac;
  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

const ItemCartBtn = styled.button`
  background-color: #000;
  width: 50%;
  height: 60px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;

export default ItemModal;
