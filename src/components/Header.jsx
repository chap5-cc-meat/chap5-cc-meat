import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="w-full h-[100px] flex-row justify-center items-center bg-black text-white flex gap-10">
      <div class="float-left">
        <Link to="/">정육각</Link>
      </div>
      <div class="flex flex-row gap-5">
        <div class="flex flex-row gap-2">
          <div>공지사항</div>
          <div>고객센터</div>
        </div>
        <div class="border-l border-solid border-gray-500 flex gap-2">
          <Link to="/Login" class="pl-[20px]">
            로그인
          </Link>
          <Link to="/SignUp">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
