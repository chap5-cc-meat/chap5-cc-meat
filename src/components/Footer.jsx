import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <FooterDiv>
      <FooterSection>
        <div className="flex ">
          <p className="mr-[23px] mt-[10px] text-sm leading-5">인재채용</p>
          <p className="mr-[23px] mt-[10px] text-sm leading-5">이용약관</p>
          <p className="mr-[23px] mt-[10px] text-sm leading-5 font-bold">
            개인정보처리방침
          </p>
        </div>
        <div className="flex items-center ">
          <AppButton>
            <div className="flex justify-center">
              <AppIcon />
              <AppInstall>정육각 앱 설치</AppInstall>
            </div>
          </AppButton>
          <RiKakaoTalkFill style={{ width: 24, height: 24, marginLeft: 24 }} />
          <FaInstagram style={{ width: 24, height: 24, marginLeft: 24 }} />
        </div>
      </FooterSection>
      <FooterSplit />
      <FooterMainSection>
        <CompanyInfo>
          <img
            style={{ width: '82px', marginTop: '10px' }}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2ODgiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNjg4IDI1NiI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiMwMDAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTM3LjM0MyAyMGMuNDUyIDAgLjg5Ny4xMDIgMS4zMDIuMjk4bC4yLjEwNSA4Mi41NTQgNDcuNzk0Yy4zMy4xOTEuNTQ4LjUyNy41OTMuOTAxbC4wMDguMTQydjEzLjMyNGMwIC4zODMtLjE4MS43NC0uNDgyLjk2NmwtLjExOS4wNzgtMTY4LjMyMiA5Ny40NzQgNzguMSA0NS4yMTkgNzguMTEtNDUuMjE5LTY3LjQ1My0zOS4wNTYgMTIuNzEzLTcuMzYzTDIyMS40IDE3My4zN2MuMzMuMTkxLjU0OC41MjcuNTkzLjkwMWwuMDA4LjE0MnYxMy4zMzZjMCAuMzgyLS4xODEuNzQtLjQ4Mi45NjVsLS4xMTkuMDc4LTgyLjU2NSA0Ny44MDRjLS4zOTIuMjI2LS44MjguMzYtMS4yNzcuMzk1bC0uMjI1LjAwOGgtMTIuM2MtLjQ1MiAwLS44OTctLjEwMi0xLjMwMy0uMjk4bC0uMTk5LS4xMDUtODAuMTgxLTQ2LjQyMWMtLjM5NC0uMjI4LS43My0uNTQyLS45ODMtLjkxN2wtLjEyLS4xOTItNy44NC0xMy42OTljLS4yMjQtLjM5LS4zNTctLjgyNi0uMzktMS4yNzRsLS4wMDktLjIyNUwzNCA4MC4zOWMwLS40NDcuMS0uODg4LjI5LTEuMjkybC4xMDMtLjE5OCA1LjQzNC05LjU2OGMuMjI2LS4zOTkuNTQtLjc0LjkxNS0uOTk2bC4xOTMtLjEyMiA4Mi41NzQtNDcuODFjLjM5LS4yMjcuODI3LS4zNjIgMS4yNzYtLjM5NmwuMjI1LS4wMDhoMTIuMzMzem0yMTcuNjM0IDEyOS42MjRsLjcwOS4wMDRjNS4xNjcuMDY2IDkuNzg5Ljg1NiAxMy44NjUgMi4zNyA0LjI2MSAxLjU4MSA3Ljg5NyAzLjcyOSAxMC45MDkgNi40NDEgMy4wMSAyLjcxMiA1LjMxMiA1LjkzMyA2LjkwMyA5LjY2MyAxLjU5IDMuNzI5IDIuMzg2IDcuNzk3IDIuMzg2IDEyLjIwNSAwIDQuNDA3LS43OTUgOC40NzYtMi4zODYgMTIuMjA1LTEuNTkxIDMuNzMtMy44OTIgNi45NS02LjkwMyA5LjY2My0zLjAxMiAyLjcxMi02LjY0OCA0Ljg2LTEwLjkxIDYuNDQyLTQuMDc1IDEuNTEzLTguNjk3IDIuMzAzLTEzLjg2NCAyLjM2OGwtLjcwOS4wMDVoLTIyLjQ5OWwtLjcwOC0uMDA1Yy01LjE2Ny0uMDY1LTkuNzktLjg1NS0xMy44NjUtMi4zNjgtNC4yNjEtMS41ODMtNy44OTgtMy43My0xMC45MDktNi40NDItMy4wMTEtMi43MTItNS4zMTItNS45MzMtNi45MDMtOS42NjMtMS41OTEtMy43My0yLjM4Ni03Ljc5OC0yLjM4Ni0xMi4yMDUgMC00LjQwOC43OTUtOC40NzYgMi4zODYtMTIuMjA1IDEuNTktMy43MyAzLjg5Mi02Ljk1IDYuOTAzLTkuNjYzIDMuMDExLTIuNzEyIDYuNjQ4LTQuODYgMTAuOTA5LTYuNDQyIDQuMDc2LTEuNTEzIDguNjk4LTIuMzAzIDEzLjg2NS0yLjM2OWwuNzA4LS4wMDRoMjIuNXptMjgwLjc5OCAxLjY5NWwuMTg3LjAwOWMuNDMyLjAzOS44My4yMTQgMS4xOTMuNTI3bC4xNTQuMTQyIDcuNjcgOC4xMzcuMTA3LjExN2MuMjM2LjI4NC4zNjguNjM1LjM5OCAxLjA1NWwuMDA2LjE4NHY0Mi43MmwtLjAwNi4xNjVjLS4wNTYuNzU0LS41MDMgMS4yNDgtMS4zNDIgMS40ODNsLS4xODYuMDQ2LTE0LjgyOSAzLjM5LS4xNDguMDNjLS4zODguMDU2LS43MDctLjA2Ny0uOTYtLjM2OC0uMjQ4LS4yOTctLjM4OC0uNjgtLjQyLTEuMTVsLS4wMDYtLjIwN3YtNDAuMTc2aC03Mi43ODJsLS4xODQtLjAwNGMtLjk1NC0uMDUtMS40NTktLjUwMi0xLjUxNS0xLjM1NmwtLjAwNS0uMTY1di0xMy4wNTNsLjAwNS0uMTY1Yy4wNTYtLjg1NC41NjEtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA1aDgwLjk2NHptLTEwMC4xMS0yNS4yNThsLjE4NC4wMDVjLjk1NC4wNSAxLjQ1OS41MDIgMS41MTUgMS4zNTZsLjAwNS4xNjV2MTMuMDUybC0uMDA1LjE2NWMtLjA1Ni44NTQtLjU2MSAxLjMwNi0xLjUxNSAxLjM1NmwtLjE4NS4wMDVoLTMzLjkxOXYxNi40NDRoNi4xMzZsLjE4OC4wMDhjLjQzMi4wMzkuODMuMjE1IDEuMTkzLjUyN2wuMTUzLjE0MyA3LjY3IDguMTM2LjEwOC4xMThjLjIzNi4yODMuMzY4LjYzNS4zOTggMS4wNTRsLjAwNi4xODV2MzMuNzM0bC0uMDA2LjE2NWMtLjA1Ni43NTQtLjUwMyAxLjI0OS0xLjM0MiAxLjQ4NGwtLjE4Ni4wNDYtMTQuODMgMy4zOS0uMTQ4LjAzYy0uMzg3LjA1Ni0uNzA3LS4wNjctLjk2LS4zNjktLjI0OC0uMjk2LS4zODgtLjY4LS40MTktMS4xNWwtLjAwNi0uMjA2di0zMS4xOTFoLTc4LjkxOGwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ2LS41MDItMS41MTUtMS4zNTZsLS4wMDYtLjE2NXYtMTMuMDUzbC4wMDYtLjE2NWMuMDU2LS44NTQuNTYtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA0aDE0LjE0N3YtMTYuNDQ0aC0zMy45MmwtLjE4My0uMDA1Yy0uOTU0LS4wNS0xLjQ2LS41MDItMS41MTUtMS4zNTZsLS4wMDYtLjE2NXYtMTMuMDUybC4wMDYtLjE2NWMuMDU2LS44NTQuNTYtMS4zMDYgMS41MTUtMS4zNTZsLjE4NC0uMDA1aDEzNC42NTR6TTM1NS44MyAxNjUuNzI4aC0yNC4yMDRsLS40NjguMDA1Yy00LjMzOS4wODgtNy45OSAxLjQxNS0xMC45NTIgMy45NzktMy4wNjggMi42NTYtNC42MDIgNi4xODctNC42MDIgMTAuNTk1IDAgNC40MDcgMS41MzQgNy45NCA0LjYwMiAxMC41OTUgMi45NjIgMi41NjQgNi42MTMgMy44OSAxMC45NTIgMy45NzlsLjQ2OC4wMDVoMjQuMjA0YzQuNTQ1IDAgOC4zNTItMS4zMjggMTEuNDItMy45ODQgMy4wNjgtMi42NTYgNC42MDItNi4xODggNC42MDItMTAuNTk1IDAtNC40MDgtMS41MzQtNy45NC00LjYwMi0xMC41OTUtMi45NjItMi41NjQtNi42MTMtMy44OS0xMC45NTMtMy45NzlsLS40NjctLjAwNXpNMTMxLjE3NyAzMC42ODhMNDYuNzIgNzkuNTk1djkwLjQ0OWwxNjIuNTY3LTk0LjEzNS03OC4xMS00NS4yMnptMzUzLjE4MiAxMTEuNDc3aC0zMi4wNDR2MTYuNDQ0aDMyLjA0NHYtMTYuNDQ0em0tOTYuMTQ0LTg1LjI2OGwuMTY2LjAwNWMuODU4LjA1NiAxLjMxMy41NTggMS4zNjMgMS41MDdsLjAwNS4xODN2ODAuMDEzbC0uMDA2LjE2NmMtLjA1Ni43NTQtLjUwMyAxLjI0OC0xLjM0MiAxLjQ4M2wtLjE4Ni4wNDYtMTQuODI5IDMuMzktLjE0OC4wM2MtLjM4OC4wNTYtLjcwNy0uMDY3LS45Ni0uMzY4LS4yNDktLjI5Ny0uMzg4LS42OC0uNDItMS4xNWwtLjAwNi0uMjA2di0zNC45MjFoLTI2LjA3OWwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ1OS0uNTAyLTEuNTE1LTEuMzU2bC0uMDA1LS4xNjVWOTIuNDk2bC4wMDUtLjE2NWMuMDU2LS44NTQuNTYxLTEuMzA2IDEuNTE1LTEuMzU2bC4xODQtLjAwNWgyNi4wNzlWNTguNTkybC4wMDUtLjE4M2MuMDUtLjk0OS41MDUtMS40NSAxLjM2My0xLjUwN2wuMTY2LS4wMDVoMTQuODI5em0yNTUuNzQxIDBsLjE2Ni4wMDVjLjg1OC4wNTYgMS4zMTMuNTU4IDEuMzYzIDEuNTA3bC4wMDUuMTgzdjI2LjI3NmgyMi41bC4xODQuMDA0Yy45NTMuMDUgMS40NTkuNTAzIDEuNTE1IDEuMzU3bC4wMDUuMTY0djEzLjA1M2wtLjAwNS4xNjVjLS4wNTYuODU0LS41NjIgMS4zMDYtMS41MTUgMS4zNTZsLS4xODUuMDA1SDY0NS40OXYzNi43ODZsLS4wMDYuMTY1Yy0uMDU2Ljc1NC0uNTAzIDEuMjQ5LTEuMzQyIDEuNDg0bC0uMTg2LjA0Ni0xNC44MjkgMy4zOS0uMTQ4LjAzYy0uMzg4LjA1NS0uNzA3LS4wNjctLjk2LS4zNjktLjI0OC0uMjk2LS4zODgtLjY4LS40Mi0xLjE1bC0uMDA2LS4yMDZWNTguNTkybC4wMDUtLjE4M2MuMDUtLjk0OS41MDUtMS40NSAxLjM2My0xLjUwN2wuMTY2LS4wMDVoMTQuODN6TTM0Ny45OSA2My41MDhsLjE4NC4wMDVjLjk1NC4wNSAxLjQ2LjUwMiAxLjUxNSAxLjM1NmwuMDA2LjE2NXYxMy4wNTNsLS4wMDYuMTY1Yy0uMDU2Ljg1NC0uNTYgMS4zMDYtMS41MTUgMS4zNTZsLS4xODQuMDA1aC0yNy43ODN2MTIuODgzbC0uMDAyLjY1M2MtLjAyMyAzLjQ0OS0uMjI1IDYuMzYyLS42MDYgOC43NGwtLjA3NC40NCAzMi4wNDQgMjQuNzQ5LjE0LjA5N2MuODQ3LjYxOS45NSAxLjI4My4zMDkgMS45OTRsLS4xMDguMTEzLTguNjkzIDEwLjUxLS4wOTYuMTI1Yy0uNTIyLjYzLTEuMTc4LjY4LTEuOTcuMTVsLS4xNS0uMTA2LTI5LjE0Ni0yMi4wMzctLjM3NS4zOTdjLTIuOTE4IDMuMDYtNi44MjcgNi40My0xMS43MjcgMTAuMTEzbC0uOTc4LjczLTEuMDE3Ljc0OC0xLjU5NyAxLjE1Ny0xLjY4NSAxLjItMS4xNy44MjItMS44MyAxLjI2OC0xLjkxNiAxLjMxLTIuMDAzIDEuMzUyLTEuMzgzLjkyNC0xLjQyMy45NDMtMi4yMDUgMS40NS0yLjI5MyAxLjQ5LS43ODMuNTA3Yy0uODU2LjUzMi0xLjU2LjUxMy0yLjExNC0uMDU3bC0uMTAyLS4xMTMtOC42OTMtMTAuNTEtLjEwOC0uMTEzYy0uNjQxLS43MS0uNTM4LTEuMzc1LjMwOS0xLjk5NGwzLjU4Ni0yLjU0MiAxLjk1Ni0xLjM5OCAxLjg3LTEuMzQ2IDIuMzYzLTEuNzE0IDEuNjc0LTEuMjI1IDEuNTg5LTEuMTc0IDEuOTg3LTEuNDgzIDEuMzkxLTEuMDUzIDEuMzA4LTEgLjgyNC0uNjM5IDEuMDAzLS43ODYuNDg2LS4zODcuOTQyLS43NjIuOTAyLS43NDQuNDM1LS4zNjYuODQxLS43MTljMi4xOS0xLjg5MyAzLjk0OS0zLjYwNSA1LjI3Ny01LjEzNSAyLjE2LTIuNDg3IDMuNDk0LTQuNzc1IDQuMDA2LTYuODY2LjQ3Ny0xLjk1MS43MzItNC4zMi43NjMtNy4xMDlsLjAwNC0uNjA0Vjc5LjYxM2gtMjcuNzgzbC0uMTg0LS4wMDVjLS45NTQtLjA1LTEuNDYtLjUwMi0xLjUxNi0xLjM1NmwtLjAwNS0uMTY1VjY1LjAzNGwuMDA1LS4xNjVjLjA1Ny0uODU0LjU2Mi0xLjMwNiAxLjUxNi0xLjM1NmwuMTg0LS4wMDVoNzMuODA0em0yNDMuNjQgMGwuMTg3LjAwOWMuNDMyLjAzOS44My4yMTUgMS4xOTMuNTI3bC4xNTMuMTQyIDcuNjcgOC4xMzcuMTA4LjExOGMuMjM1LjI4My4zNjguNjM0LjM5OCAxLjA1NGwuMDA2LjE4NHY1Ni4xMTFsLS4wMDYuMTY2Yy0uMDU2Ljc1NC0uNTA0IDEuMjQ4LTEuMzQyIDEuNDgzbC0uMTg2LjA0Ni0xNC44MyAzLjM5LS4xNDguMDNjLS4zODcuMDU2LS43MDctLjA2Ny0uOTYtLjM2OC0uMjQ4LS4yOTctLjM4OC0uNjgtLjQxOS0xLjE1bC0uMDA2LS4yMDZWNzkuNjEzaC00OS4wOWwtLjE4NC0uMDA1Yy0uOTU0LS4wNS0xLjQ1OS0uNTAyLTEuNTE1LTEuMzU2bC0uMDA1LS4xNjVWNjUuMDM0bC4wMDUtLjE2NWMuMDU2LS44NTQuNTYxLTEuMzA2IDEuNTE1LTEuMzU2bC4xODQtLjAwNWg1Ny4yNzF6bS0xMTEuMTktNS4yNTVsLjc0LjAwNWM1LjE1NS4wNjQgOS43NjYuNzk3IDEzLjgzMyAyLjE5OSA0LjI2MiAxLjQ3IDcuODcgMy41MDMgMTAuODI0IDYuMTAzIDIuOTU0IDIuNTk5IDUuMTk5IDUuNjUgNi43MzMgOS4xNTQgMS41MzQgMy41MDMgMi4zIDcuMzQ2IDIuMyAxMS41MjcgMCA0LjE4MS0uNzY2IDguMDI0LTIuMyAxMS41MjctMS41MzQgMy41MDQtMy43NzkgNi41NTUtNi43MzMgOS4xNTQtMi45NTUgMi42LTYuNTYyIDQuNjM0LTEwLjgyNCA2LjEwMy00LjA2NyAxLjQwMi04LjY3OCAyLjEzNS0xMy44MzMgMi4ybC0uNzQuMDA0aC0yNC4yMDRsLS43NC0uMDA1Yy01LjE1NC0uMDY0LTkuNzY2LS43OTctMTMuODMzLTIuMTk5LTQuMjYxLTEuNDctNy44Ny0zLjUwMy0xMC44MjQtNi4xMDMtMi45NTQtMi41OTktNS4xOTgtNS42NS02LjczMi05LjE1NC0xLjUzNC0zLjUwMy0yLjMwMS03LjM0Ni0yLjMwMS0xMS41MjcgMC00LjE4MS43NjctOC4wMjQgMi4zLTExLjUyNyAxLjUzNS0zLjUwNCAzLjc3OS02LjU1NSA2LjczMy05LjE1NCAyLjk1NS0yLjYgNi41NjMtNC42MzQgMTAuODI0LTYuMTAzIDQuMDY3LTEuNDAyIDguNjc5LTIuMTM1IDEzLjgzMy0yLjJsLjc0LS4wMDRoMjQuMjA0em0uODUyIDE2LjEwNWgtMjUuOTA4bC0uNDg0LjAwNGMtNC4zMjguMDgtNy45MTcgMS4yMzctMTAuNzY2IDMuNDctMi45NTQgMi4zMTctNC40MzEgNS40NTQtNC40MzEgOS40MDkgMCAzLjk1NSAxLjQ3NyA3LjA5MiA0LjQzMSA5LjQwOCAyLjg1IDIuMjM0IDYuNDM4IDMuMzkxIDEwLjc2NiAzLjQ3MWwuNDg0LjAwNGgyNS45MDhjNC41NDYgMCA4LjI5NS0xLjE1OCAxMS4yNS0zLjQ3NSAyLjk1NC0yLjMxNiA0LjQzMi01LjQ1MyA0LjQzMi05LjQwOCAwLTMuOTU1LTEuNDc4LTcuMDkyLTQuNDMyLTkuNDA4LTIuODQ5LTIuMjM0LTYuNDM4LTMuMzkxLTEwLjc2Ni0zLjQ3MWwtLjQ4NC0uMDA0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
          />
          <CompanyInfoDiv>
            <div className="mb-1">
              (주)정육각 대표이사: 김재연 | 주소: 경기도 김포시 고촌읍
              아라육로57번길 126
            </div>
            <div className="mb-1">
              사업자등록번호 : 224-87-00271 [조회]|통신판매업신고번호:
              2021-경기김포-0668
            </div>
            <div>개인정보관리책임자: 박준태(privacy@yookgak.com)</div>
          </CompanyInfoDiv>
          <div className="mt-[29px] text-[12px]">
            © 2021 Jeongyookgak Inc. All rights reserved.
          </div>
        </CompanyInfo>
        <ExtraInfo>
          <h6 className="text-[14px] font-bold">고객센터</h6>
          <h3 className="text-[24px] font-bold mt-[-5px]">1800-0658</h3>
          <p className="text-[12px] leading-[15px] text-[#757575] mt-[-5px]">
            평일: 08:30 - 17:30 <br />
            점심: 12:30 - 13:30 <br />
            (토, 일 및 공휴일 휴무)
            <br />
          </p>
          <p className="mt-[9px] text-[13px]">
            카카오톡: <span className="text-[#4bb8ce]">@정육각</span>
          </p>
          <p className="text-[13px]">
            이메일: <span className="text-[#4bb8ce]">help@yookgak.com</span>
          </p>
          <FAQButton style={{ marginRight: 8 }}>자주묻는질문</FAQButton>
          <FAQButton>1:1문의</FAQButton>
        </ExtraInfo>
      </FooterMainSection>
    </FooterDiv>
  );
};

const FooterDiv = styled.footer`
  margin-top: 150px;
  border-top: 1px solid #bdbdbd;
`;

const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1184px;
  margin-top: 11px;
  margin-left: auto;
  margin-right: auto;
`;

const AppButton = styled.button`
  width: 128px;
  height: 40px;
  background-color: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
`;

const AppIcon = styled.i`
  margin-top: 4px;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzIxMjEyMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOCAwYzEuMTA1IDAgMiAuODk1IDIgMnYxNGMwIDEuMTA1LS44OTUgMi0yIDJIMmMtMS4xMDUgMC0yLS44OTUtMi0yVjJDMCAuODk1Ljg5NSAwIDIgMGg2ek0zIDFIMmMtLjUxMyAwLS45MzYuMzg2LS45OTMuODgzTDEgMnYxNGMwIC41MTMuMzg2LjkzNi44ODMuOTkzTDIgMTdoNmMuNTEzIDAgLjkzNi0uMzg2Ljk5My0uODgzTDkgMTZWMmMwLS41MTMtLjM4Ni0uOTM2LS44ODMtLjk5M0w4IDFIN3YuNWMwIC4yNzYtLjIyNC41LS41LjVoLTNjLS4yNzYgMC0uNS0uMjI0LS41LS41VjF6bTMuNSAxNGMuMjc2IDAgLjUuMjI0LjUuNXMtLjIyNC41LS41LjVoLTNjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWgzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyAzKSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K');
  background-size: cover;
  display: block;
`;

const AppInstall = styled.p`
  margin-top: 7px;
  display: block;
  font-size: 13px;
  color: #212121;
`;

const FooterSplit = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 11px;
  background-color: #eee;
`;

const FooterMainSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1184px;
  margin: 8px auto 19px;
`;

const CompanyInfo = styled.article`
  margin-top: 16px;
`;

const CompanyInfoDiv = styled.div`
  margin-top: 16px;
  line-height: 19px;
  font-size: 13px;
`;

const ExtraInfo = styled.section`
  text-align: right;
`;

const FAQButton = styled.button`
  margin-top: 10px;
  width: 88px;
  height: 32px;
  border: 1px solid #212121;
  border-radius: 4px;
  background-color: #fff;
  font-size: 13px;
`;

export default Footer;
