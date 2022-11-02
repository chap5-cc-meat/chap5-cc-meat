import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';
import ShoppingBanner from '../components/ShoppingBanner';
import ShoppingTabs from '../components/ShoppingTabs';
import { useSelector } from 'react-redux';

const Shopping = () => {
  //query를 가져올때는 useSearchParams를 써보자.
  const [searchParams, setSearchParams] = useSearchParams();

  //useSearchParams를 통해 ? 뒤 정보 get하기
  const tab = searchParams.get('tab');

  const items = useSelector((state) => state.homeSlice.items.data);
  const [data, setData] = useState(items);
  const test = data?.filter((item) => item.category === tab);

  const props = {
    amount: 1,
    category: 'beef',
    content: '100g당 16,000원',
    cost: 48000,
    deadline: '제품에 별도 표기',
    imgUrl:
      'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/beefsirloin-monep-list.png',
    item: '한우 등심',
    option: '구이용',
    origin: '국내산(한우)',
    postId: 4,
    title: '한우 등심 구이용(1++등급)',
  };

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

  return (
    <>
      <Header />
      <BlankHeader />
      <ShoppingBanner />
      <ListTabSection>
        <ul className="flex ">
          {tabLists.map((list) => (
            <ShoppingTabs key={list.key} lists={list}>
              {list.name}
            </ShoppingTabs>
          ))}
        </ul>
      </ListTabSection>
      <ItemListsSection>
        <ItemLists>
          {test?.length === 0 ? (
            <Item product={props} />
          ) : (
            test?.map((item) => <Item key={item.postId} product={item} />)
          )}
        </ItemLists>
      </ItemListsSection>
      <Footer />
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

const ItemListsSection = styled.section`
  width: 1184px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`;

const ItemLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  width: 100%;
`;

export default Shopping;
