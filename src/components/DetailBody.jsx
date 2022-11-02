import React from 'react';
import styled from 'styled-components';

const DetailBody = ({ item }) => {
  const tests = [
    { title: '·품목명', body: item?.title, key: 1 },
    { title: '내용량', body: ' 중량 600g, 실중량은 제품에 별도 표기', key: 2 },
    {
      title: '·생산자 및 소재지',
      body: '주식회사 정육각 l F1 : 경기도 성남시 중원구 순환로 212, 1층, F2 : 경기도 김포시 고촌읍 아라육로57번길 126, 4층 일부 ',
      key: 3,
    },
    { title: '·원산지', body: '국내산 ', key: 4 },
    { title: '·유통기한', body: item?.deadline, key: 5 },
    {
      title: '·이력관리대상축산물 유무',
      body: '이력관리대상, 이력번호는 제품에 별도 표기 ',
      key: 6,
    },
    { title: '·제품구성', body: ' (국내산) 100%', key: 7 },
    { title: '·보관방법', body: ' ', key: 8 },
    { title: '·소비자안전을 위한 주의사항', body: ' ', key: 9 },
    { title: '·소비자상담 전화', body: ' ', key: 10 },
  ];

  return (
    <BodySection>
      <article>
        <ProductInfo>상품 기본정보</ProductInfo>
        <InfoSplit />
        <InfoContainer>
          <div>
            <DetailInfoLists>
              {tests.map((it) => (
                <InfoList key={it.key}>
                  <InfoTitle>{it.title}</InfoTitle>
                  <InfoBody>{it.body}</InfoBody>
                </InfoList>
              ))}
            </DetailInfoLists>
          </div>
        </InfoContainer>
      </article>
    </BodySection>
  );
};

const BodySection = styled.section`
  width: 1180px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 43px;
`;
const ProductInfo = styled.h3`
  font-size: 32px;
  font-weight: bold;
`;

const InfoSplit = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 21px;
  background-color: #4a4a4a;
`;

const InfoContainer = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 20px;
`;

const DetailInfoLists = styled.ul`
  padding-top: 8px;
  width: 590px;
`;

const InfoList = styled.li`
  display: flex;
  align-items: center;
`;

const InfoTitle = styled.p`
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px; ;
`;
const InfoBody = styled.p`
  margin-left: 32px;
  width: 408px;
  font-weight: bold;
`;

export default DetailBody;
