import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { meatApi } from '../tools/instance';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteItems, __getItems } from '../redux/modules/cartItemSlice';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';
import CartIem from './CartIem';
import { setItemAmount } from '../redux/modules/cartItemSlice';

const Carts = () => {
  const dispatch = useDispatch();

  //주문할 상품들
  const getItems = useSelector((state) => state.cartItems.carts);
  const getItem = getItems.data;

  //view
  useEffect(() => {
    dispatch(__getItems());
  }, [dispatch]);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let a = 0;
    for (let i = 0; i < getItem?.length; i++) {
      a = a + getItem[i].cost * getItem[i].amount;
    }
    dispatch(setItemAmount(a));
  }, []);

  const cartAmount = useSelector((state) => state.cartItems.itemAmount);

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
                return <CartIem items={items} />;
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
                  <span>{cartAmount.toLocaleString()}원</span>
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
                  <span>{cartAmount.toLocaleString()}원</span>
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
