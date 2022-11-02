import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const ShoppingBanner = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  const [pork, beef, chicken, seafood, mealkit, milk, egg, baby] = [
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcpork.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcbeef.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcchicken.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcseafood.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcmealkit.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcmilk.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcegg.png',
    'https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-app/web/list_top/new/pcbaby.png',
  ];

  return (
    <>
      {tab === null && <ListBanner imgUrl={pork} />}
      {tab === 'pork' && <ListBanner imgUrl={pork} />}
      {tab === 'beef' && <ListBanner imgUrl={beef} />}
      {tab === 'chicken' && <ListBanner imgUrl={chicken} />}
      {tab === 'seafood' && <ListBanner imgUrl={seafood} />}
      {tab === 'mealkit' && <ListBanner imgUrl={mealkit} />}
      {tab === 'milk' && <ListBanner imgUrl={milk} />}
      {tab === 'egg' && <ListBanner imgUrl={egg} />}
      {tab === 'baby' && <ListBanner imgUrl={baby} />}
    </>
  );
};

const ListBanner = styled.div`
  background: url(${(props) => props.imgUrl}) 50% 50% / cover no-repeat;
  width: 100%;
  min-width: 1184px;
  height: 520px;
`;

export default ShoppingBanner;
