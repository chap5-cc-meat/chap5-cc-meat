import React from 'react';
// import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import data_kakao from '../assets/data_kakao.svg';
import data_naver from '../assets/data_naver.svg';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="block w-[400px] mx-[auto]">
        <h1 className="mt-[160px] text-[24px] text-center text-[#212121] font-bold font-sans">
          회원가입
        </h1>
        <p className="w-[328px] mx-[auto] mt-[60px] text-[18px] font-bold font-sans outline-0">
          SNS 계정으로 간편하게 가입하기
        </p>
        <article className="block w-[328px] mx-[auto] text-center">
          <div className="text-center py-[10px]">
            <button className="w-[328px] h-[48px] leading-[48px] text-[16px] rounded-[4px] bg-[#fae100] text-[#3c1e1e] cursor-pointer font-sans">
              <div className="inline-block flex justify-center items-center">
                <img
                  src={data_kakao}
                  alt="snsKakao"
                  // className="inline-block w-[42px] h-[42px] cursor-pointer text-center"
                />
                <span className="float-left inline-block leading-[48px]">
                  카카오로 시작하기
                </span>
              </div>
            </button>
            <button className="w-[328px] h-[48px] leading-[48px] text-[16px] mt-[14px] rounded-[4px] bg-[#03C75A] text-[#fff] cursor-pointer font-sans">
              <div className="inline-block flex justify-center items-center">
                <img
                  src={data_naver}
                  alt="snsNaver"
                  // className="inline-block w-[42px] h-[42px] cursor-pointer text-center"
                />
                <span className="float-left inline-block leading-[48px]">
                  네이버로 시작하기
                </span>
              </div>
            </button>
          </div>
        </article>
        <p className="w-[328px] mx-[auto] mt-[34px] text-[18px] font-bold font-sans outline-0">
          이메일로 가입하기
        </p>
        <button
          className="block w-[328px] h-[48px] mx-[auto] mt-[12px] text-[16px] rounded-[4px] border border-solid border-[#ED2D44] cursor-pointer font-sans"
          onClick={() => {
            navigate('/Signup/register');
          }}
        >
          <span className="text-[#ED2D44]">정육각 회원가입 하기</span>
        </button>

        <p className="mt-[34px] mb-[100px] text-[16px] text-center cursor-pointer font-sans">
          {'정육각 회원이신가요?'}
          <Link to="/SignUp" className="text-red-500">
            <span> 로그인하기</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
