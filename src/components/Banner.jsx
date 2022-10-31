import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import bannerImg from '../assets/bannerImg.png';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  return isVisible ? (
    <TopBanner>
      <BannerSection>
        <BannerDiv onClick={() => setIsVisible(true)}></BannerDiv>
        <img src={bannerImg} alt="배너 이미지" />
      </BannerSection>
    </TopBanner>
  ) : (
    <></>
  );
};

const TopBanner = styled.div`
  width: 100%;
  position: relative;
  height: 60px;
  min-width: 1184px;
  cursor: pointer;
  background-image: radial-gradient(circle at 50% 527%, #ff896a, #e23000 119%);
`;

const BannerSection = styled.section`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1180px;
`;

const BannerDiv = styled.div`
  width: 60px;
  margin-left: 1120px;
  height: 100%;
  position: absolute;
`;

export default Banner;
