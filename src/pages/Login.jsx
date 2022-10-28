import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../myhooks/useInput';
// import Header from '../components/Header';

const Login = () => {
  const [login, onChange, setLogin] = useInput({
    email: '',
    password: '',
  });

  return (
    <>
      {/* <Header /> */}
      <div class="w-[330px]">
        <h1 class="font-bold text-center">로그인</h1>
        <form
        // onSubmit={onSubmit}
        >
          <div class="my-0 mx-auto flex flex-col ">
            <label class="border-gray-400">이메일 로그인 </label>
            <input
              type="email"
              name="email"
              value={login.email}
              onChange={onChange}
              placeholder="아이디(이메일주소)를 입력하세요"
            ></input>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={onChange}
              placeholder="비밀번호를 입력하세요"
            ></input>
            <button type="submit">로그인</button>
          </div>
        </form>
        <div>SNS 간편 로그인 </div>
        <button>카카오로 시작하기</button>
        <button>네이버로 시작하기</button>
        <p>
          정육각이 처음이신가요?{' '}
          <Link to="/SignUp" class="text-red-500">
            회원가입
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
