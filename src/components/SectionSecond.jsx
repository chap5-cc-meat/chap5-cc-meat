import React from 'react';
import styled from 'styled-components';

const SectionSecond = () => {
  return (
    <section className="w-[1184px] mt-12 ml-auto mr-auto flex">
      <SwipeContainer>
        <SwipeContainerImg src="https://jeongyookgak-asset-manager.s3.ap-northeast-2.amazonaws.com/commerce/CRM_event/202210_event_mackerel-banner.png" />
      </SwipeContainer>
      <SecondContainer>
        <SwipeContainerImg src=" https://www.jeongyookgak.com/static/img/freshplan.9fe4775.png" />
      </SecondContainer>
    </section>
  );
};

const SwipeContainer = styled.div`
  width: 576px;
  height: 176px;
  background-color: black;
`;

const SwipeContainerImg = styled.img`
  width: 576px;
  height: 176px;
`;

const SecondContainer = styled.div`
  width: 592px;
  height: 176px;
`;

export default SectionSecond;
