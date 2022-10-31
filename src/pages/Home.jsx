import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Item from '../components/Item';
import ItemModal from '../components/ItemModal';
import SectionFirst from '../components/SectionFirst';
import SectionSecond from '../components/SectionSecond';

const Home = () => {
  //서버에서 베스트상품만 get 해서 - 이미지 url, 아이템 넘버(?), 설명 가져오고 => (전부 다 긁어오고)
  // Items.map((it) => <Item item={it} />) props로 전달
  return (
    <>
      <>
        <Banner />
        <Header />
      </>
      <div>
        <section>
          <SectionFirst />
        </section>
        <SectionSecond />
        <BestItemsSection>
          <BestItemsTitle>정육각 베스트 상품</BestItemsTitle>
          <BestItemLists>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </BestItemLists>
        </BestItemsSection>
        <GoItemListBanner src="https://www.jeongyookgak.com/static/img/banner_shop.96086e0.png" />
      </div>
      <>
        <Footer />
      </>
    </>
  );
};

const BestItemsSection = styled.section`
  width: 1184px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`;

const BestItemsTitle = styled.h5`
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
`;

const BestItemLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  width: 100%;
  height: 1090px;
`;

const GoItemListBanner = styled.img`
  margin-top: 33px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export default Home;
