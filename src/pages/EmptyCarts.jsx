import React from 'react';
import { useNavigate } from 'react-router-dom';
import data_goshoping from '../assets/data_goshoping.svg';

const EmptyCarts = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[1180px] mx-[auto] t-[190px] pb-[100px] overflow-hidden">
        <p className="block text-[32px] leading-[26px] text-center outline-0 ">
          장바구니
        </p>
        <section className="mt-[52px] overflow-auto border-t-[1px] border-solid border-black">
          <h1 className="mt-[76px] h-[24px] leading-[63px] text-center text-[#e1dedf] font-normal">
            장바구니에 담은 상품이 없습니다.
          </h1>
          {/* <button className="block w-[260px] h-[70px] mx-auto mt-[63px] bg-black cursor-pointer text-white text-[16px] font-bold border-0 ">
                <p className="block float-left ml-[29px] outline-0 ">
                  쇼핑 계속하기
                </p>
              </button> */}
          <button
            onClick={() => navigate('/list')}
            className="block w-[260px] h-[70px] mx-[auto] mt-[63px] flex-row justify-center items-center  border-0 bg-black text-white text-[16px] font-bold cursor-pointer  "
          >
            <p className="float-left ml-[28px] block text-white text-[16px] font-bold">
              쇼핑하러가기
            </p>
            <img
              src={data_goshoping}
              alt="arrow"
              className="relative bottom-[2px] inline-block w-[23px] h-[15px] ml-[60px] italic "
            />
          </button>
        </section>
      </div>
    </>
  );
};

export default EmptyCarts;
