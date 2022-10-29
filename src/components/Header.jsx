import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full h-[100px] flex-row justify-center items-center bg-black text-white flex gap-10">
      <div className="float-left">
        <Link to="/">정육각</Link>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2">
          <div>공지사항</div>
          <div>고객센터</div>
        </div>
        <div className="border-l border-solid border-gray-500 flex gap-2">
          <Link to="/Login" className="pl-[20px]">
            로그인
          </Link>
          <Link to="/SignUp">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
