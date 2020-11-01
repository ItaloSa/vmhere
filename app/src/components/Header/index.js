import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 75px 0;
  .col {
    display: flex;
    align-items: center;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
`;

const Title = styled.h1`
  margin-right: 30px;
`;

const Header = () => (
  <Wrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <Title>VMHere</Title>
          <Nav>
            <ul>
              <li>Home</li>
              <li>Setup New</li>
            </ul>
          </Nav>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Header;
