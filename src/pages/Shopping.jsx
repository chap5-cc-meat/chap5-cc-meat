import React, { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import ShoppingBanner from '../components/ShoppingBanner';
import ShoppingTabs from '../components/ShoppingTabs';

const Shopping = () => {
  //query를 가져올때는 useSearchParams를 써보자.
  const [searchParams, setSearchParams] = useSearchParams();

  const tabLists = [
    { name: '돼지', engName: 'pork', key: 1 },
    { name: '소', engName: 'beef', key: 2 },
    { name: '닭', engName: 'chicken', key: 3 },
    { name: '수산', engName: 'seafood', key: 4 },
    { name: '밀키트', engName: 'mealkit', key: 5 },
    { name: '우유', engName: 'milk', key: 6 },
    { name: '달걀', engName: 'egg', key: 7 },
    { name: '이유식', engName: 'baby', key: 8 },
  ];

  //useSearchParams를 통해 ? 뒤 정보 get하기
  const tab = searchParams.get('tab');

  return (
    <>
      <Header />
      <BlankHeader />
      <ShoppingBanner />
      <ListTabSection>
        <ul className="flex">
          {tabLists.map((list) => (
            <ShoppingTabs key={list.key} lists={list}>
              {list.name}
            </ShoppingTabs>
          ))}
        </ul>
      </ListTabSection>
    </>
  );
};

const BlankHeader = styled.div`
  height: 96px;
`;

const ListTabSection = styled.section`
  width: 1184px;
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default Shopping;
