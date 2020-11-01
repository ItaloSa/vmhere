import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper, Nav, Title } from '../components/Header';

const Header = () => {
  return(
    <HeaderWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <Title>VMHere</Title>
          <Nav>
            <ul>
              <li><NavLink exact={true} to="/">Home</NavLink></li>
              <li><NavLink to="/new-vm">Setup new</NavLink></li>
            </ul>
          </Nav>
        </div>
      </div>
    </div>
  </HeaderWrapper>
  );
};

export default Header;
