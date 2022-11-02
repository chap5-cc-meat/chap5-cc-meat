import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import porkleg from '../assets/porkleg-clean-list.png';
import minus from '../assets/data_minus.svg';
import plus from '../assets/data_plus.svg';
import itemdel from '../assets/data_itemclose.svg';
import { meatApi } from '../tools/instance';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import data_goshoping from '../assets/data_goshoping.svg';
import EmptyCarts from './EmptyCarts';
import { useDispatch, useSelector } from 'react-redux';
import { __getItems } from '../redux/modules/cartItemSlice';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

const Carts = () => {
  const [tokens, setTokens] = useCookies(['token']);
  const accesstoken = jwtDecode(tokens.token);
  console.log(accesstoken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Btn // getItem
  // console.log(basket);
  //count적용할 상품들
  const data = useSelector((state) => state.cartItems.carts);
  console.log(data.data);
  //주문할 상품들
  const getItems = useSelector((state) => state.cartItems.carts);
  console.log(getItems);

  const getItem = getItems.data;
  console.log(getItem);

  // const [, setBasket] = useState();
  // const [data, setGetItem] = useState(getItems);

  //view
  useEffect(() => {
    dispatch(__getItems());
  }, [dispatch]);

  const [amount, setAmount] = useState();

  //빼기 버튼
  const minusBtn = () => {
    if (amount < 2) {
      return;
    } else {
      setAmount((amount) => amount - 1);
    }
  };

  //더하기 버튼
  const plusBtn = () => {
    setAmount((crr) => crr + 1);
    console.log(amount);
  };

  // if (basket !== 0) {
  // console.log(...getItems?.data);
  return (
    <>
      <Header />
      <div>
        <div className="w-[1180px] mx-[auto] mt-[190px] pb-[100px] overflow-hidden">
          <p className="text-[32px] leading-[26px] text-center">장바구니</p>
          <section className="block float-left w-[860px] mt-[52px] border-t-[1px] border-solid border-black">
            <div className="w-[100%] h-[55px] leading-[55px] border-b-[1px] border-soild border-[#e1dedf]">
              <div className="float-left ml-[248px] text-[13px] leading-[55px] text-center ">
                {'상품정보'}
              </div>
              <div className="float-left ml-[301px] text-[13px] leading-[55px] text-center">
                {'수량'}
              </div>
              <div className="float-left ml-[110px] text-[13px] leading-[55px] text-center">
                {'가격'}
              </div>
            </div>
            {/* 장바구니 상품정보 getItems 정렬 */}

            <ul className="list-none">
              {getItem?.map((items) => {
                return (
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
                        {'초신선 무항생제'}
                        <br />
                        {'돼지 앞다리 제육용'}
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
                      <ButtonMinus onClick={() => minusBtn}>
                        <img
                          src={minus}
                          alt="minus"
                          className="block w-[12px] h-[12px] ml-[16px] mt-[14px] italic "
                        />
                      </ButtonMinus>
                      <p className="float-left w-[24%] leading-[38px] text-center">
                        {items.amount}
                        {/* {amount} */}
                      </p>
                      <ButtonPlus onClick={() => plusBtn}>
                        <img
                          src={plus}
                          alt="plus"
                          className="block w-[12px] h-[12px] ml-[16px] mt-[14px] italic"
                        />
                      </ButtonPlus>
                    </div>
                    <div className="w-[143px] ml-[8px] text-[16px] leading-[24px] text-center outline-0 list-none">
                      <span className="leading-[24px] text-[16px] text-center outline-0">
                        {items.cost}원
                      </span>
                    </div>
                    <button
                      className="w-[40px] h-[40px] ml-[-1px] text-center border-0 outline-0 font-sans cursor-pointer "
                      // style={{
                      //   backgroundImage: "url('../assets/data_itemclose.svg')",
                      // }}
                    >
                      <img src={itemdel} alt="itemdel" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="float-left outline-0 w-[280px] mt-[51px] ml-[40px] pb-[30px] border-t-[1px] border-solid border-black bg-[#f8f8f8] font-sans">
            <div className="w-[220px] mx-[30px] outline-0">
              <div className="overflow-hidden mt-[7px] pb-[15px] border-b-[1px] border-solid border-[#e1dedf]">
                <p className="block float-left ml-[1px] text-[16px] leading-[24px] mt-[15px] ">
                  총 상품 금액
                </p>
                <p className="block float-right text-right text-[15px] leading-[24px] mt-[15px]">
                  <span>12,600원</span>
                </p>
              </div>
              <div className="border-b-[1px] border-solid border-[#e1dedf] pb-[7px] outline-0 ">
                <div className="overflow-hidden mb-[5px]">
                  <p className="float-left block outline-0 ml-[1px] text-[15px] leading-[24px] mt-[15px]">
                    총 배송비
                  </p>
                  <p className="float-right mt-[15px] text-right text-[15px] leading-[24px]">
                    <span>0</span>원
                  </p>
                </div>
                <section className="mb-[2px] text-[#9b9b9b] text-right text-[13px] leading-[24px]">
                  <span className="mr-[12.5px] text-right text-[13px] leading-[24px text-[#9b9b9b]]">
                    기본 배송비
                  </span>
                  <span className="inline-block w-[50px] outlie-0 ">
                    2,500원
                  </span>
                </section>
                <section className="mb-[2px] text-[#4a90e2] text-right text-[13px] leading-[24px]">
                  <span className="mr-[12.5px] outline-0">첫구매 무료배송</span>
                  <span className="inline-block w-[50px] outline-0 text-[#4a90e2]">
                    -100%
                  </span>
                </section>
              </div>
              <p className="block outline-0 mt-[6px] mb-[26px] text-center text-[14px] leading-[24px] text-[#4a90e2] ">
                첫구매 무료배송 혜택이 적용되었습니다.
              </p>
              <div className="mt-[15px] text-right pb-[9px] outline-0">
                <p className="block text-[14px] font-bold leading-[24px] ">
                  예상 결제 금액
                </p>
                <p className="mt-[2px] text-[24px] font-bold leading-[24px] text-[#d0021b] outline-0 ">
                  <span>12,600원</span>
                </p>
              </div>
              <button
                onClick={() => {
                  alert('서비스 준비중입니다.');
                }}
                className="block outline-0 w-[100%] h-[50px] mt-[10px] border-0 bg-[#d0021b] cursor-pointer text-[15px] text-white font-bold"
              >
                전체상품 주문하기
              </button>
              <Link to="/">
                <button className="w-[100%] h-[50px] border-0 mt-[10px] cursor-pointer bg-[#acacac] text-[15px] text-white font-bold">
                  쇼핑계속하기
                </button>
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
  // } else {
  //   //빈카트일 때
  //   <EmptyCarts />;
  // }
};

export default Carts;

//더하기 버튼
const ButtonPlus = styled.button`
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
