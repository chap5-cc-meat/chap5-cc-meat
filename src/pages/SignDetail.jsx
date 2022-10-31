import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useInput from '../myhooks/useInput';
import { __submitBtn } from '../redux/modules/signUpSlice';
import { meatApi } from '../tools/instance';
import docs from '../assets/data_docs.svg';
import signinfo from '../assets/data_signinfo.svg';
import arrow from '../assets/data_arrow.svg';
// import { meatApi } from '../tools/instance';

// const Pop = () => {
//   const open = () => {};

//   return (
//     <div className="hidden w-full h-full flex justify-center items-center box-border absolute z-1000 bg-black/[.6]">
//       <div className="w-[500px] h-[240px] flex flex-col items-center bg-white rounded-[3px] shadow-[0px_0px_30px_10px_rgba(0,0,0,0.3)]">
//         <div className="relative top-[37px]">
//           <h2 className="text-center text-[19px] font-bold">정보 입력</h2>
//           <p className="w-[90%] relative mt-[22px] justify-center leading-[24px] whitespace-pre text-[16px]">
//             {props} 모든 정보를 입력해주세요.
//           </p>
//           <button className="block w-[84px] h-[30px] absolute top-[120px] left-[30%] mt-justify-center items-center mt-[1rem] border border-solid border-gray-300 bg-gray-100 text-[13px] font-[700]">
//             확인
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// //
// if (ok === 0) {
//   return modal;
// }

//회원가입 상세페이지
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

  // const [isCheckEmail, setIsCheckEmail] = useState(false);
  //이메일 - 중복검사
  // const onCheckEmail = (e) => {
  //   e.preventDefault();
  //   meatApi.post

  // }

  // const [Pop, setPop] = useState(false);

  // {
  //   Pop === true ? <Modal /> : null;
  // }

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
    //     email: formRef.current.email.value,
    //     nickname: formRef.current.nickname.value,
    //     password: formRef.current.password.value,
    //     confirmPassword: formRef.current.confirmPassword.value,
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
      {/* <div>
        <Pop />
        </div> */}
      {/* Header */}
      <Header />

      <div>
        <p className="block mt-[200px] text-center text-[32px]">회원가입</p>
        <section className="w-full h-[90px] mx-[auto] mt-[30px] flex flex-row justify-center items-center bg-[#f7f7f7] text-center">
          <img src={docs} alt="ok" className="w-[56px] h-[52px]" />
          <p className="ml-[18px] text-[16px] font-bold text-[#d8d8d8]">
            {'01. 약관동의 '}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="w-[18px] h-[32px] ml-[40px]"
          />
          <img
            src={signinfo}
            alt="signinfo"
            className="w-[56px] h-[52px] ml-[40px]"
          />
          <p className="ml-[18px] text-[16px] font-bold"> 02. 정보입력</p>
        </section>
        <section className="w-[780px] mx-[auto] mt-[50px] mb-[80px]">
          <p className="block text-[15px] leading-[24px] ">가입정보 입력</p>

          <form ref={formRef} onSubmit={onSubmit}>
            <div className="w-[780px] mt-[16px] mb-[36px] border border-solid border-[#e1dedf]-500 font-sans">
              <div className="overflow-hidden border-b-[1px] border-[#e1dedf]-500 ">
                <div className="float-left w-[179px] border-r-[1px] border-[#e1dedf]-500 bg-[#f7f7f7] text-[14px] leading-[68px]">
                  <label className="ml-[29px]">아이디(이메일주소)</label>
                </div>
                <div className="float-left">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={info.email}
                    onChange={onChange}
                    className="relative w-[456px] h-[38px] pl-[22px] text-[14px] ml-[20px] mt-[15px] border border-solid border-[#e1dedf]"
                  />
                  <div className="absolute top-[5px] bg-gray-400 mt-[10px]">
                    <button
                      type="button"
                      className="w-[90px] leading-[40px]"
                      // onClick={onCheckEmail}
                    >
                      중복검사
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden border-b-[1px] border-[#e1dedf]-500">
                <div className="float-left w-[179px] border-r-[1px] border-[#e1dedf]-500 bg-[#f7f7f7] text-[14px] leading-[68px]">
                  <label className="ml-[29px]">비밀번호</label>
                </div>
                <div className="float-left">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={info.password}
                    onChange={onChange}
                    className="w-[456px] h-[38px] pl-[22px] text-[14px] ml-[20px] mt-[15px] border border-solid border-[#e1dedf]"
                  />
                </div>
              </div>
              {info.password.length === 0 ? (
                <div></div>
              ) : info.password.length <= 3 ? (
                <div className="text-[14px] text-red-500">
                  비밀번호는 대,소문자 또는 숫자를 포함한 4자 이상 적어주세요
                </div>
              ) : (
                <></>
              )}

              <div className="overflow-hidden border-b-[1px] border-[#e1dedf]-500">
                <div className="float-left w-[179px] border-r-[1px] border-[#e1dedf]-500 bg-[#f7f7f7] text-[14px] leading-[68px]">
                  <label className="ml-[29px]">비밀번호 확인</label>
                </div>
                <div className="float-left">
                  <input
                    id="passwordConfirm"
                    type="password"
                    name="confirmPassword"
                    value={info.confirmPassword}
                    onChange={onChange}
                    className="w-[456px] h-[38px] pl-[22px] text-[14px] ml-[20px] mt-[15px] border border-solid border-[#e1dedf]"
                  />
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="float-left w-[179px] border-r-[1px] border-[#e1dedf]-500 bg-[#f7f7f7] text-[14px] leading-[68px]">
                  <label className="ml-[29px]">이름</label>
                </div>
                <div className="float-left">
                  <input
                    id="nickname"
                    type="text"
                    name="nickname"
                    value={info.nickname}
                    onChange={onChange}
                    className="w-[456px] h-[38px] pl-[22px] text-[14px] ml-[20px] mt-[15px] border border-solid border-[#e1dedf]"
                  />
                </div>
              </div>
            </div>
            {/* 버튼 */}
            <div className="overflow-hidden flex flex-row justify-center mt-[6px]">
              <button
                onClick={() => navigate('/SignUp')}
                className="float-left w-[50%] h-[60px] border-0 text-[16px] font-bold text-white bg-[#888888] "
              >
                이전으로
              </button>
              <button className="float-left w-[50%] h-[60px] border-0 text-[16px] font-bold text-white bg-black ">
                가입하기
              </button>
              {/* {Pop === true ? <Modal /> : null} */}
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignDetail;
