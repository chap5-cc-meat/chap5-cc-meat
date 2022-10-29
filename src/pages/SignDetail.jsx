import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useInput from '../myhooks/useInput';
import { __submitBtn } from '../redux/modules/signUpSlice';
import { meatApi } from '../tools/instance';
// import { meatApi } from '../tools/instance';

const SignDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  //여유가 되면 react-hook-form
  const [info, onChange, setInfos] = useInput({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  // console.log(info);

  // form 가입하기
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      info.email.trim() === '' ||
      info.nickname.trim() === '' ||
      info.password.trim() === '' ||
      info.confirmPassword.trim() === ''
    ) {
      return alert('모든 항목을 입력해주셔유');
    }

    // meatApi
    //   .postSignUps({
    //     email: '',
    //     nickname: '',
    //     password: '',
    //     confirmPassword: '',
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(__submitBtn(info));
    setInfos();
  };

  // console.log(info);

  return (
    <>
      {/* modal */}
      <div className="block w-full h-full flex justify-center items-center box-border absolute z-1000 bg-black/[.6]">
        <div className="w-[500px] h-[240px] flex flex-col items-center bg-white rounded-[3px] shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)]">
          <div className="relative top-[37px]">
            <h2 className="text-center text-[19px] font-bold">정보 입력</h2>
            <p className="w-[90%] relative mt-[22px] justify-center leading-[24px] whitespace-pre text-[16px]">
              모든 정보를 입력해주세요.
            </p>
            <button className="block w-[84px] h-[30px] absolute top-[120px] left-[30%] mt-justify-center items-center mt-[1rem] border border-solid border-gray-300 bg-gray-100 text-[13px] font-[700]">
              확인
            </button>
          </div>
        </div>
      </div>
      {/* Header */}
      <Header />

      <div>
        <p className="block mt-[100px] border border-solid border-gray-500 text-center text-[32px]">
          회원가입
        </p>
        <section className="flex flex-row justify-center text-center">
          <p>01. 약관동의 </p>
          <p>{'>'} 02. 정보입력</p>
        </section>
        <section className="w-[810px] my-0 mx-[auto] flex flex-col items-center">
          <p>가입정보 입력</p>
          <div>
            <form ref={formRef} onSubmit={onSubmit}>
              <div>
                <label>아이디(이메일주소)</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={info.email}
                  onChange={onChange}
                  className="border border-solid border-gray-500"
                />

                <label>비밀번호</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={info.password}
                  onChange={onChange}
                  className="border border-solid border-gray-500"
                />
                {info.password.length === 0 ? (
                  <div></div>
                ) : info.password.length <= 3 ? (
                  <div className="text-[14px] text-red-500">
                    비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 적어주세요
                  </div>
                ) : (
                  <></>
                )}
                <label>비밀번호 확인</label>
                <input
                  id="passwordConfirm"
                  type="password"
                  name="confirmPassword"
                  value={info.confirmPassword}
                  onChange={onChange}
                  className="border border-solid border-gray-500"
                />
                <label>이름</label>
                <input
                  id="nickname"
                  type="text"
                  name="nickname"
                  value={info.nickname}
                  onChange={onChange}
                  className="mb-[16px] border border-solid border-gray-500"
                />
                <div className="gap-5 flex flex-row justify-center border border-solid border-gray-500">
                  <button onClick={() => navigate('/SignUp')}>이전으로</button>
                  <button>가입하기</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignDetail;
