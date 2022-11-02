import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailContents from '../components/DetailContents';
import Header from '../components/Header';
import { __getAnItem } from '../redux/modules/detailSlice';
import DetailTabs from '../components/DetailTabs';

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { id } = param;
  const item = useSelector((state) => state.detailSlice.item.data);

  useEffect(() => {
    dispatch(__getAnItem(Number(id)));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <BlankHeader />
      <DetailSection>
        <DetailContainer>
          <DetailData>
            <picture>
              <DetailImage src={item?.imgUrl} />
            </picture>
            <DetailContents />
          </DetailData>
        </DetailContainer>
      </DetailSection>
      <DetailTabs />
    </div>
  );
};

const BlankHeader = styled.div`
  width: 100%;
  height: 96px;
`;

const DetailSection = styled.section`
  width: 100%;
  background-color: #1c1c1c;
  padding-bottom: 50px;
`;

const DetailContainer = styled.div`
  width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

const DetailData = styled.div`
  display: flex;
  padding-top: 60px;
`;

const DetailImage = styled.img`
  margin-left: 30px;
  margin-right: 70px;
  width: 500px;
  height: 500px;
  aspect-ratio: auto 500 / 500;
`;

export default Detail;
