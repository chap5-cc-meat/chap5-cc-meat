//src/pages/MyPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
// import styled from 'styled-components';
import data_mypage from '../assets/data_mypage.svg';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import data_goshoping from '../assets/data_goshoping.svg';
import Footer from '../components/Footer';
import tooltip from '../assets/data_tooltip.svg';
import { Cookies } from 'react-cookie';
const MyPage = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const tokens = cookies.get('token');
  const nickname = cookies.get('nickname');
  console.log(tokens, nickname);
  // 로그아웃;

  // console.log(accesstoken);
  const onLogout = () => {
    cookies.remove('token');
    window.location.replace(`/`);
  };
  //탭메뉴;
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    {
      tabT: (
        <div className=" float-left w-[100%] mr-[60px] overflow-hidden leading-[23px] text-[20px] text-[#cbcbcb] font-bold text-center cursor-pointer font-sans clicked:border-b-1px border-black">
          주문내역
        </div>
      ),
      content: (
        <section className="w-[980px]">
          <div className="w-[100%] h-[1px] bg-black mt-[58px]"></div>
          <p className=" mt-[76px] text-center text-[38px] text-[#dbdbdb]">
            주문한 내역이 없습니다.
          </p>
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
          <div className="w-[100%] h-[1px] bg-[#e1dedf] mt-[69px]"></div>
        </section>
      ),
    },
    {
      tabT: (
        <div className="float-left w-[100%] mr-[60px] overflow-hidden leading-[23px] text-[20px] text-[#cbcbcb] font-bold text-center cursor-pointer font-sans">
          적립금내역
        </div>
      ),
      content: (
        <section className="w-[980px]">
          <div className="w-[100%] h-[1px] bg-black mt-[58px]"></div>
          <div className="mt-[120px] text-[#dbdbdb] text-[38px] text-center">
            {' 적립금 내역이 없습니다. '}
          </div>
          <div className="w-[100%] h-[1px] bg-[#e1dedf] mt-[120px]"></div>
        </section>
      ),
    },
    {
      tabT: (
        <div className="float-left w-[100%] mr-[60px] overflow-hidden leading-[23px] text-[20px] text-[#cbcbcb] font-bold text-center cursor-pointer font-sans">
          쿠폰관리
        </div>
      ),
      content: (
        <section className="w-[980px] mt-[85px]">
          <div className="text-center">
            <input
              type="text"
              placeholder="쿠폰코드"
              className="w-[455px] h-[44px] pl-[24px] text-[16px] font-bold bg-[#f7f7f7] border border-solid border-[#e1dedf] "
            />
            <button className="w-[80px] h-[46px] ml-[14px] bg-white border border-[#e1dedf] text-[13px] font-bold curser-pointer">
              등록
            </button>
          </div>
          <div className="mb-[186px] font-sans">
            <div className="w-[100%] h-[1px] bg-black mt-[58px]"></div>
            <p className="block mt-[140px] text-[38px] text-[#dbdbdb] text-center">
              {' 보유하고 계신 쿠폰이 없습니다.'}
            </p>
            <div className="w-[100%] h-[1px] bg-[#e1dedf] mt-[140px]"></div>
          </div>
        </section>
      ),
    },
    {
      tabT: (
        <div className="float-left w-[100%] mr-[60px] overflow-hidden leading-[23px] text-[20px] text-[#cbcbcb] font-bold text-center cursor-pointer font-sans">
          신선플랜
        </div>
      ),
      content: (
        <section>
          <div className="w-[100%] h-[1px] bg-black mt-[58px]"></div>
          <p className="mt-[21px] ml-[-450px] text-[18px] font-bold ">
            현재 플랜을 보유하고 있지 않습니다
          </p>
          <div className="w-[100%] h-[1px] bg-[#e1dedf] mt-[140px]"></div>
        </section>
      ),
    },
    {
      tabT: (
        <div className="float-left w-[100%] mr-[60px] overflow-hidden leading-[23px] text-[20px] text-[#cbcbcb] font-bold text-center cursor-pointer font-sans">
          개인정보관리
        </div>
      ),
      content: (
        <section className="w-[980px]">
          <div className="w-[100%] h-[1px] bg-black mt-[58px]"></div>
          <div className="mt-[120px] text-[#dbdbdb] text-[38px] text-center">
            {'준비중입니다. '}
          </div>
          <div className="w-[100%] h-[1px] bg-[#e1dedf] mt-[120px]"></div>
        </section>
      ),
    },
  ];
  //탭메뉴 선택시 내용 컨트롤
  const selectMenuHandler = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <>
      <Header />
      <div className="w-[980px] mt-[160px] mx-[auto] my-[0px] flex flex-col items-center font-sans">
        <p className="block text-[32px] leading-[26px] text-center font-sans">
          마이페이지
        </p>
        <section className="overflow-hidden mt-[73px]">
          <img
            src={data_mypage}
            alt="welcome"
            className="float-left w-[100px] font-sans"
          />
          <div className="float-left w-[780px] mt-[13px] ml-[42px] flex-row justify-center items-center font-sans">
            <p className="block float-left mt-[8px] text-[24px] font-bold ">
              Hello, {nickname}님
            </p>
            <button
              onClick={onLogout}
              className="block float-left h-[24px] border-b-[1px] border-[#cbcbcb]-500 mt-[16px] ml-[40px] bg-white text-[16px] font-bold text-[#cbcbcb] text-[#cbcbcb] cursor-pointer"
            >
              로그아웃
            </button>
            <button className="float-right w-[120px] h-[45px] border-0 bg-black text-white text-[14px] font-bold">
              내질문보기
            </button>
            <div className="block w-[100%] h-[2px] bg-black mt-[72px] font-sans"></div>
            <ul className="flex overflow-hidden mt-[15px] list-none">
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-[16px] text-center font-bold font-sans">
                    회원등급
                  </h3>
                  <p className="block text-[14px] font-bold text-[#cbcbcb]">
                    [웰컴]
                  </p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-[16px] text-center font-bold  font-sans">
                    적립금
                  </h3>
                  <p className="block text-[14px] font-bold text-[#cbcbcb]">
                    [0원]
                  </p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px]  text-[16px] text-center font-bold font-sans">
                    쿠폰
                  </h3>
                  <p className="block text-[14px] font-bold text-[#cbcbcb]">
                    [0개]
                  </p>
                </div>
              </li>
              <li className="float-left w-[20%] leading-[24px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px] text-[16px] text-center font-bold font-sans">
                    구매
                  </h3>
                  <p className="block text-[14px] font-bold text-[#cbcbcb]">
                    [0건]
                  </p>
                </div>
              </li>
              <li className="float-left w-[22%] leading-[20px] font-sans">
                <div className="inline-block text-center">
                  <h3 className="leading-[24px]  text-[16px] text-center font-bold font-sans">
                    회원번호
                  </h3>
                  <p className="line-block font-bold text-[14px] text-center leading-[24px] text-[#cbcbcb]">
                    [1234-5678-1234-5678]
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <div className="w-[100%] mt-[65px] mx-[auto] my-[0px] text-center overflow-hidden">
          <div className="flex flex-row justify-center items-center">
            {menuArr.map((ele, idx) => {
              return (
                <div
                  key={idx}
                  className="{currentTab === idx ? 'submenu foused' : 'submenu'}  "
                  onClick={() => selectMenuHandler(idx)}
                >
                  {ele.tabT}
                </div>
              );
            })}
          </div>
        </div>
        <div>{menuArr[currentTab].content}</div>
      </div>
      <Footer />
    </>
  );
};

export default MyPage;

// const TabMenu = styled.ul`
//   background-color: #dcdcdc;
//   font-weight: bold;
//   display: flex;
//   flex-direction: row;
//   justify-items: center;
//   align-items: center;
//   list-style: none;

//   &:hover {
//     border-bottom: 1px solid #000;
//   }

//   .submenu {
//     width: 100% auto;
//     padding: 15px 10px;
//     cursor: pointer;
//   }
// `;

// 화살표 아이콘
