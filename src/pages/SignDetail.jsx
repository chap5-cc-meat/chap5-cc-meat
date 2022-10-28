import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useInput from '../myhooks/useInput';
import { meatApi } from '../tools/instance';

const SignDetail = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  //여유가 되면 react-hook-form
  const [info, onChange, setInfos] = useInput({
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  });

  //value값 지정
  // const onChange = () => {

  // }

  //form 가입하기
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      info.email.trim() === '' ||
      info.nickname.trim() === '' ||
      info.password.trim() === '' ||
      info.passwordConfirm.trim() === ''
    ) {
      return alert('모든 항목을 입력해주셔유');
    }

    meatApi
      .postSignUps({
        email: formRef.current.email.value,
        password: formRef.current.password.value,
        passwordConfirm: formRef.current.passwordConfirm.value,
        nickname: formRef.current.nickname.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setInfos();
  };

  console.log(info);

  return (
    <>
      <div class="hidden w-full h-full flex justify-center items-center box-border absolute z-1000 bg-black/[.6]">
        <div class="w-[500px] h-[240px] flex flex-col items-center bg-white rounded-[3px] shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)]">
          <div class="relative top-[37px]">
            <h2 class="text-center text-[19px] font-bold">정보 입력</h2>
            <p class="w-[90%] relative mt-[22px] justify-center leading-[24px] whitespace-pre text-[16px]">
              모든 정보를 입력해주세요.
            </p>
            <button
              // onClick={() => }
              class="block w-[84px] h-[30px] absolute top-[120px] left-[30%] mt-justify-center items-center mt-[1rem] border border-solid border-gray-300 bg-gray-100 text-[13px] font-[700]"
            >
              확인
            </button>
          </div>
        </div>
      </div>
      {/* Header */}
      <Header />

      <div>
        <p class="block mt-[100px] border border-solid border-gray-500 text-center text-[32px]">
          회원가입
        </p>
        <section class="flex flex-row justify-center text-center">
          <p>01. 약관동의 </p>
          <p>{'>'} 02. 정보입력</p>
        </section>
        <section class="w-[810px] my-0 mx-[auto] flex flex-col items-center">
          <p>가입정보 입력</p>
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label>아이디(이메일주소)</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={onChange}
                    class="border border-solid border-gray-500"
                  />
                </div>
                <label>비밀번호</label>
                <div>
                  <input
                    type="password"
                    name="password"
                    value={info.password}
                    onChange={onChange}
                    class="border border-solid border-gray-500"
                  />
                  {/* {info.password.length === 0 ? (
                    <div></div>
                  ) : info.password.replace(' ', '').includes(info.nickname) ? (
                    <span>패스워드에 닉네임이 포함되어있습니다.</span>
                  ) : info.password.length <= 3 ||
                    info.password.length >= 30 ? (
                    <span>
                      비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 30글자
                      이하로 적어주세요
                    </span>
                  ) : (
                    <></>
                  )} */}
                </div>
                <label>비밀번호 확인</label>
                <div>
                  <input
                    type="password"
                    name="passwordConfirm"
                    value={info.passwordConfirm}
                    onChange={onChange}
                    class="border border-solid border-gray-500"
                  />
                </div>
                <label>이름</label>
                <div>
                  <input
                    type="text"
                    name="nickname"
                    value={info.nickname}
                    onChange={onChange}
                    class="mb-[16px] border border-solid border-gray-500"
                  />
                </div>
                <div class="gap-5 flex flex-row justify-center border border-solid border-gray-500">
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
