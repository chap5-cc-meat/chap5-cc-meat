import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Item from '../components/Item';
import SectionFirst from '../components/SectionFirst';
import SectionSecond from '../components/SectionSecond';
import { __getItems } from '../redux/modules/homeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.homeSlice.items.data);

  useEffect(() => {
    dispatch(__getItems());
  }, [dispatch]);

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
            {items?.slice(0, 6).map((item) => (
              <Item key={item.postId} product={item} />
            ))}
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
