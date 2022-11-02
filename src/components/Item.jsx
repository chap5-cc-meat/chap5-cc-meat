import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ItemModal from './ItemModal';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tokens, setTokens, removeCookies] = useCookies(['token']);
  const navigate = useNavigate();

  return (
    <ItemList>
      <ItemDiv>
        <div className=" absolute">
          <ItemImg src={product?.imgUrl} />
          {tokens.token ? (
            <ItemButton onClick={() => setOpenModal(!openModal)}>
              <CartIcon />
              {openModal && (
                <ItemModal
                  closeModal={() => setOpenModal(!openModal)}
                  product={product}
                />
              )}
            </ItemButton>
          ) : (
            <>
              <ItemButton
                onClick={() => {
                  alert('로그인이 필요합니다!');
                  navigate('/login');
                }}
              >
                <CartIcon />
              </ItemButton>
            </>
          )}
        </div>
      </ItemDiv>
      <ItemName>{product?.item}</ItemName>
      <ItemInfo>기준가 {product.cost?.toLocaleString()}원/600g</ItemInfo>
    </ItemList>
  );
};

const ItemList = styled.li`
  width: 365px;
  margin-right: 28px;
  margin-bottom: 61px;
`;

const ItemDiv = styled.div`
  position: relative;
  width: 100%;
  height: 416px;
  background-color: #f9f7f8;
`;

const ItemImg = styled.img`
  margin-top: 70px;
  margin-left: 50px;
  aspect-ratio: auto 276 / 276;
  width: 276px;
  height: 276px;
  cursor: pointer;
`;

const ItemButton = styled.div`
  width: 72px;
  height: 72px;
  box-shadow: 0 25px 10px -15px rgb(0 0 0 / 12%);
  border: 2px solid #eee;
  border-radius: 50%;
  background-color: #fff;
  margin-top: -18px;
  margin-left: 288px;
  display: block;
  cursor: pointer;
  :hover {
    background-color: #000;
  }
`;

const CartIcon = styled.i`
  display: block;
  width: 68px;
  height: 68px;

  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgdmlld0JveD0iMCAwIDcyIDcyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzIxMjEyMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC41IDQ3LjVjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00em0xNiAwYzIuMjEgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTQgMS43OS00IDQtNHptLTE2IDNjLS41NTIgMC0xIC40NDgtMSAxcy40NDggMSAxIDEgMS0uNDQ4IDEtMS0uNDQ4LTEtMS0xem0xNiAwYy0uNTUyIDAtMSAuNDQ4LTEgMXMuNDQ4IDEgMSAxIDEtLjQ0OCAxLTEtLjQ0OC0xLTEtMXpNMjMgMjBjLjU0NSAwIDEuMDQyLjI5NSAxLjMwNi43NjNsLjA2Ni4xMzJMMjUuNzQyIDI0SDUxYzEuMDUgMCAxLjc2MiAxLjA0NiAxLjQxMSAyLjAwOWwtLjA1LjEyLTYgMTNjLS4yMjQuNDg3LS42OS44MTMtMS4yMTYuODY0TDQ1IDQwSDMxLjMwM2wtMiAzSDQ2LjVjLjc4IDAgMS40Mi41OTUgMS40OTMgMS4zNTZMNDggNDQuNWMwIC43OC0uNTk1IDEuNDItMS4zNTYgMS40OTNMNDYuNSA0NmgtMjBjLTEuMTU0IDAtMS44NTktMS4yMzgtMS4zMTYtMi4yMmwuMDY4LS4xMTIgMy41NDMtNS4zMTZMMjIuMDIyIDIzSDE4LjVjLS43OCAwLTEuNDItLjU5NS0xLjQ5My0xLjM1NkwxNyAyMS41YzAtLjc4LjU5NS0xLjQyIDEuMzU2LTEuNDkzTDE4LjUgMjBIMjN6bTI1LjY1NSA3SDI3LjA2Nmw0LjQxMiAxMEg0NC4wNGw0LjYxNS0xMHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=');
  background-size: cover;

  :hover {
    filter: invert();
  }
`;

const ItemName = styled.h6`
  font-size: 18px;
  margin-top: 16px;
  cursor: pointer;
`;

const ItemInfo = styled.p`
  font-size: 16px;
  color: #9b9b9b;
  cursor: pointer;
`;

export default Item;
