import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../myhooks/useInput';
import Header from '../components/Header';
import { meatApi } from '../tools/instance';
import { useCookies } from 'react-cookie';

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
      .then(
        (res) => {
          console.log(res.data.token);
          setTokens('token', res.data.token);
          window.location.replace(`/`);
        }
        // setTokens('token', res.data.token);
      )
      .catch((error) => {
        console.log(error.response.data.statusCode);
        const errMsg = error.response.data.errorMessage;
        const code = error.response.data.statusCode;
        console.log(code);

        // const ModalMsg = () => {
        //   return (
        //     <div className="hidden w-full h-full flex justify-center items-center box-border absolute z-1000 bg-black/[.6]">
        //       <div className="w-[500px] h-[240px] flex flex-col items-center bg-white rounded-[3px] shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)]">
        //         <div className="relative top-[37px]">
        //           <h2 className="text-center text-[19px] font-bold">
        //             정보 입력
        //           </h2>
        //           <p className="w-[90%] relative mt-[22px] justify-center leading-[24px] whitespace-pre text-[16px]">
        //             모든정보를 입력해주세요
        //           </p>
        //           <button className="block w-[84px] h-[30px] absolute top-[120px] left-[30%] mt-justify-center items-center mt-[1rem] border border-solid border-gray-300 bg-gray-100 text-[13px] font-[700]">
        //             확인
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   );
        // };

        // code === 404 || errMsg === '가입 정보를 찾을 수 없습니다' ? (
        //   <ModalMsg />
        // ) : (
        //   <></>
        // );
      });
  };

  return (
    <>
      <Header />
      <div className="w-[330px]">
        <h1 className="font-bold text-center">로그인</h1>
        <form ref={formRef} onSubmit={onLogin}>
          <div className="my-0 mx-auto flex flex-col ">
            <label className="border-gray-400">이메일 로그인 </label>
            <input
              id="email"
              type="email"
              name="email"
              value={login.email}
              onChange={onChange}
              placeholder="아이디(이메일주소)를 입력하세요"
            ></input>
            <input
              id="password"
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
          <Link to="/SignUp" className="text-red-500">
            회원가입
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
