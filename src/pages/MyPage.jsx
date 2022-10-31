//src/pages/MyPage.jsx
import React from 'react';
import Header from '../components/Header';
import data_mypage from '../assets/data_mypage.svg';
import jwtDecode from 'jwt-decode';
// import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  //로그아웃
  //   const [tokens, setTokens, removeCookies] = useCookies(['token']);
  //   const accesstoken = jwtDecode(tokens.data);

  //   console.log(accesstoken);
  //   const onLogout = () => {
  //     removeCookies('accesstoken');
  //     navigate('/MainPage');
  //   };
  return (
    <>
      <Header />
      <div className="mt-[160px] mx-[auto] my-[0px] items-center font-sans">
        <p className="block text-[32px] leading-[26px] text-center">
          마이페이지
        </p>
        <div className="overflow-hidden mt-[70px]">
          <img
            src={data_mypage}
            alt="welcome"
            className="float-left block w-[100px] font-sans"
          />
          <div className="float-left w-[780px] mt-[13px] ml-[42px] font-sans">
            <p className="block float-left mt-[8px] text-[24px] font-bold ">
              Hello, 아무개님
            </p>
            <button
              //   onClick={onLogout}
              className="float-left h-[24px] border-0 mt-[9px] ml-[40px] bg-white text-[16px] font-bold text-[#cbcbcb] text-[#cbcbcb] cursor-pointer"
            >
              로그아웃
            </button>
            <button className="float-right w-[120px] h-[45px] border-0 bg-black text-white text-[14px] font-bold">
              내질문보기
            </button>
            <div className="block w-[100%] h-[2px] bg-black mt-[72px] font-sans"></div>
            <ul className="overflow-hidden mt-[15px] no-underline list-none">
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-center font-sans">
                    회원등급
                  </h3>
                  <p>[웰컴]</p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-center font-sans">
                    적립금
                  </h3>
                  <p>[0원]</p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-center font-sans">쿠폰</h3>
                  <p>[0개]</p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-center font-sans">구매</h3>
                  <p>[0건]</p>
                </div>
              </li>
              <li className="float-left leading-[20px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-center font-sans">
                    회원번호
                  </h3>
                  <p className="block font-bold text-[14px] text-center leading-[24px] text-[#cbcbcb]">
                    [1234-5678-1234-5678]
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
