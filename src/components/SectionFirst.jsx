import React from 'react';
import styled from 'styled-components';

const SectionFirst = () => {
  return <BannerContainer />;
};

const BannerContainer = styled.div`
  width: 100%;
  min-width: 1184px;
  height: 560px;

  background: url('https://www.jeongyookgak.com/static/img/main_firstgift_login.97e950a.png')
    50% 50% / cover no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export default SectionFirst;
