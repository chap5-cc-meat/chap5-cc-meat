import React from 'react';
import styled from 'styled-components';
import logoSvg from '../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [tokens, setTokens, removeCookies] = useCookies(['token']);

  const navigate = useNavigate();
  const location = useLocation();

  const goHomeHandler = () => {
    navigate('/');
  };

  const goShoppingHandler = () => {
    navigate('/list');
  };

  return (
    <HeaderDiv top="0px" position="fixed">
      <NavContainer>
        <Logo src={logoSvg} onClick={goHomeHandler} />
        <NavMainMenu>
          <NavMainMenuList onClick={goShoppingHandler}>
            {location.pathname === '/list' ? (
              <NavMenu
                border="1px solid #fff"
                fontweight="700"
                onClick={goShoppingHandler}
              >
                쇼핑하기
              </NavMenu>
            ) : (
              <NavMenu onClick={goShoppingHandler}>쇼핑하기</NavMenu>
            )}
          </NavMainMenuList>
          <NavMainMenuList>배송안내</NavMainMenuList>
          <NavMainMenuList>이벤트</NavMainMenuList>
        </NavMainMenu>
        <NavigationRight>
          <NavSubMenu>
            <SubMenuList>공지사항</SubMenuList>
            <SubMenuList>고객센터</SubMenuList>
          </NavSubMenu>
          <NavSplitBar />
          {tokens.token ? (
            <>
              <NavSubMenu>
                <SubMenuList onClick={() => navigate('/MyPage')}>
                  마이페이지
                </SubMenuList>
              </NavSubMenu>
              <Cart>
                <CartIcon />
                <CartCount>0</CartCount>
              </Cart>
            </>
          ) : (
            <>
              <NavSubMenu>
                <SubMenuList onClick={() => navigate('/login')}>
                  로그인
                </SubMenuList>
                <SubMenuList onClick={() => navigate('/Signup')}>
                  회원가입
                </SubMenuList>
              </NavSubMenu>
              <Cart>
                <CartIcon />
              </Cart>
            </>
          )}
          <HambugIcon />
        </NavigationRight>
      </NavContainer>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  top: ${(props) => props.top || 60};
  position: ${(props) => props.position || 'unset'};
  width: 100%;
  min-width: 1184px;
  height: 96px;
  background-color: #000;
  color: #fff;
  z-index: 10;
`;
const NavContainer = styled.div`
  justify-content: space-between;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
`;

const Logo = styled.img`
  float: left;
  cursor: pointer;
  width: 129px;
  height: 48px;
  aspect-ratio: auto 129 / 48;
`;

const NavMainMenu = styled.ul`
  float: left;
  margin-left: 34px;
  margin-top: 16px;

  cursor: pointer;
`;

const NavMainMenuList = styled.li`
  float: left;
  font-size: 18px;
  line-height: 18px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 14px;
  margin-top: 1px;

  :nth-child(3) {
    margin-right: 0px;
  }
`;

const NavMenu = styled.span`
  border-bottom: ${(props) => props.border || ''};
  font-weight: ${(props) => props.fontweight || ''};
`;

const NavigationRight = styled.div`
  float: right;
`;

const NavSubMenu = styled.ul`
  float: left;
  margin-top: 18px;
`;

const SubMenuList = styled.li`
  float: left;
  font-size: 14px;
  line-height: 18px;
  margin-top: 1px;

  cursor: pointer;
  :nth-child(2) {
    margin-left: 12px;
  }
`;

const NavSplitBar = styled.div`
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  width: 1px;
  height: 12px;
  margin-top: 22px;
  background-color: #fff;
`;

const Cart = styled.div`
  float: left;
  cursor: pointer;
  margin-left: 24px;
`;

const CartIcon = styled.i`
  display: block;
  width: 48px;
  height: 48px;

  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjUgMTdjLjgyOCAwIDEuNS42NzIgMS41IDEuNVM5LjMyOCAyMCA4LjUgMjAgNyAxOS4zMjggNyAxOC41IDcuNjcyIDE3IDguNSAxN3ptOCAwYy44MjggMCAxLjUuNjcyIDEuNSAxLjVzLS42NzIgMS41LTEuNSAxLjUtMS41LS42NzItMS41LTEuNS42NzItMS41IDEuNS0xLjV6bS04IDFjLS4yNzYgMC0uNS4yMjQtLjUuNXMuMjI0LjUuNS41LjUtLjIyNC41LS41LS4yMjQtLjUtLjUtLjV6bTggMGMtLjI3NiAwLS41LjIyNC0uNS41cy4yMjQuNS41LjUuNS0uMjI0LjUtLjUtLjIyNC0uNS0uNS0uNXpNNi41IDVjLjE3MSAwIC4zMjkuMDg4LjQyLjIyOGwuMDQuMDc1LjcyOSAxLjcwMkw3Ljc1IDdoOS43NWMuMzI0IDAgLjU1NS4zLjQ5LjYwM2wtLjAyNi4wODMtMiA1Yy0uMDY1LjE2Mi0uMjEuMjc3LS4zNzguMzA3TDE1LjUgMTNIOS43NjdsLTEuMzMzIDJoOC4zMTZjLjI0NSAwIC40NS4xNzcuNDkyLjQxbC4wMDguMDljMCAuMjQ1LS4xNzcuNDUtLjQxLjQ5MmwtLjA5LjAwOEg3LjVjLS4zNyAwLS42MDMtLjM4NC0uNDU3LS43MDVsLjA0MS0uMDcyIDEuODQ5LTIuNzc2TDYuMTcgNkg0LjVjLS4yNDUgMC0uNDUtLjE3Ny0uNDkyLS40MUw0IDUuNWMwLS4yNDUuMTc3LS40NS40MS0uNDkyTDQuNSA1aDJ6bTEwLjI2MSAzSDguMTE1bDEuNzE0IDRoNS4zMzJsMS42LTR6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K');
  background-size: cover;
`;

const CartCount = styled.div`
  float: left;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ed0000;

  margin-left: 24px;
  margin-top: -48px;

  color: #fff;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
`;

const HambugIcon = styled.i`
  float: left;
  cursor: pointer;
  margin-left: 8px;
  width: 48px;
  height: 48px;
  display: block;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy41IDE2Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNWgtMTFjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWgxMXptMC00Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNWgtMTFjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWgxMXptMC00Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNWgtMTFjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWgxMXoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=');
  background-size: cover;
`;

export default Header;
