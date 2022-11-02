import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.search.slice(1);
  const tabLists = [
    { name: '상품설명', engName: 'desc', key: 1 },
    { name: '상품리뷰', engName: 'review', key: 2 },
    { name: '상품정보안내', engName: 'info', key: 3 },
  ];

  return (
    <DetailTabsContiner>
      <div className="flex justify-center">
        {tabLists.map((list) =>
          list.engName === query ? (
            <DetailTabList
              key={list.key}
              lists={list}
              borderBottom="1px solid black"
              color="black"
              onClick={() => navigate(`?${list.engName}`)}
            >
              {list.name}
            </DetailTabList>
          ) : (
            <DetailTabList
              key={list.key}
              lists={list}
              onClick={() => navigate(`?${list.engName}`)}
            >
              {list.name}
            </DetailTabList>
          )
        )}
      </div>
    </DetailTabsContiner>
  );
};

const DetailTabsContiner = styled.div`
  width: 100%;
  height: 109px;
  text-align: center;
`;

const DetailTabList = styled.div`
  border-bottom: ${(props) => props.borderBottom};
  font-size: 18px;
  font-weight: 700;
  line-height: 19px;
  margin-right: 63.5px;
  margin-top: 45px;
  color: ${(props) => props.color || '#c2c2c2'};
  cursor: pointer;
  :hover {
    color: black;
    border-bottom: 1px solid black;
  }
`;

export default DetailTabs;
