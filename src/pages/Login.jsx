import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../myhooks/useInput';
import Header from '../components/Header';
import { meatApi } from '../tools/instance';
import { useCookies } from 'react-cookie';
import btnG_icon_square from '../assets/btnG_icon_square.png';
import data_kakao from '../assets/data_kakao.svg';
import data_naver from '../assets/data_naver.svg';
import Footer from '../components/Footer';

const Login = () => {
  const [login, onChange, setLogin] = useInput({
    email: '',
    password: '',
  });

  const formRef = useRef();
  const [tokens, setTokens] = useCookies(['token']);

  const onLogin = (e) => {
    e.preventDefault();
    meatApi
      .postLogin({
        email: formRef.current.email.value,
        password: formRef.current.password.value,
      })
      .then((res) => {
        // console.log(res);
        //console.log(res.data);
        setTokens('token', res.data.accessToken);
        setTokens('nickname', res.data.nickname);
        window.location.replace(`/`);
      })
      .catch((error) => {
        // console.log(error.response.data.statusCode);
        const errMsg = error.response.data.message;
        const code = error.response.data;

        code.ok === 0 ? alert(errMsg) : <></>;
      });
  };

  return (
    <>
      <Header />
      <div className="w-[330px] mx-[auto] my-[0px]">
        <h1 className="mt-[160px] font-sans text-[24px] font-bold text-center text-#212121-500">
          로그인
        </h1>
        <p className="w-[328px] mt-[60px] font-bold border-gray-200 text-[18px] ">
          이메일 로그인
        </p>
        <article className="w-[328px] mx-[auto] my-[0px] outline-0">
          <form
            ref={formRef}
            onSubmit={onLogin}
            className="w-[328px] mx-[auto] overflow-x-hidden overflow-y-hidden"
          >
            <section className="border-box">
              <input
                id="email"
                type="email"
                name="email"
                value={login.email}
                onChange={onChange}
                placeholder="아이디(이메일주소)를 입력하세요"
                className="w-[328px] h-[46px] pl-[14px] mt-[8px] text-[14px] border border-slid border-gray-300"
                required
              />
              <input
                id="password"
                type="password"
                name="password"
                value={login.password}
                onChange={onChange}
                placeholder="비밀번호를 입력하세요"
                className="w-[328px] h-[46px] pl-[14px] mt-[8px] text-inherit text-[14px] border border-slid border-gray-300"
                required
              />
              <button
                type="submit"
                className="w-[328px] h-[48px] mt-[8px] rounded-[4px] border-0 bg-black text-white text-[16px] "
              >
                로그인
              </button>
            </section>
          </form>
        </article>
        <article className="mt-[20px] text-[16px] text-center">
          <section className="font-sans">
            <p className="cursor-pointer">아이디 / 비밀번호 찾기</p>
          </section>
        </article>

        <p className="w-[328px] mt-[60px] my-[auto] text-[18px] font-bold font-sans">
          SNS 간편 로그인
        </p>
        <article className="block w-[328px] mx-[auto] text-center">
          <div className="text-center">
            <button className="w-[328px] h-[48px] mt-[8px] text-[16px] rounded-[4px] bg-[#fae100] text-[#3c1e1e] cursor-pointer font-sans">
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
            <button className="w-[328px] h-[48px] mt-[14px] text-[16px] rounded-[4px] bg-[#03C75A] text-[#fff] cursor-pointer font-sans">
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
        <p className="mt-[24px] mb-[100px] text-[16px] text-center cursor-pointer font-sans">
          {'정육각이 처음이신가요?'}
          <Link to="/SignUp" className="text-red-500">
            <span> 회원가입하기</span>
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
