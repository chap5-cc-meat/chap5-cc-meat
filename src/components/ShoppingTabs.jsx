import React from 'react';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
const ShoppingTabs = ({ lists }) => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  return tab === lists.engName ? (
    <TabLists
      onClick={() => navigate(`?tab=${lists.engName}`)}
      backgroundColor="#212121"
      color="#fff"
    >
      {lists.name}
    </TabLists>
  ) : (
    <TabLists onClick={() => navigate(`?tab=${lists.engName}`)}>
      {lists.name}
    </TabLists>
  );
};

const TabLists = styled.li`
  width: 143.625px;
  height: 56px;
  line-height: 56px;
  background-color: ${(props) => props.backgroundColor || '#f5f5f5'};
  color: ${(props) => props.color || '#212121'};
  border-radius: 2px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #212121;
    color: #fff;
  }
`;

export default ShoppingTabs;
