import React from 'react';
// import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div class="w-[400px]">
        <h1 class="">회원가입</h1>
        <div>SNS 계정으로 간편하게 가입하기</div>
        <div>이메일로 가입하기</div>
        <button
          onClick={() => {
            navigate('/Signup/register');
          }}
          class="p-2 border border-solid border-red-500 rounded-[3px] text-red-500 text-[14px] "
        >
          정육각 회원가입 하기
        </button>
        <p class="w-134 h-25 border border-gray-500 text-center rounded-[3px]">
          정육각 회원이신가요?
          <Link to="/Login" class="w-80 h-25 text-red-500">
            로그인하기
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
