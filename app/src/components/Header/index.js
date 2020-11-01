import styled from 'styled-components';
import theme from '../../theme';

export const HeaderWrapper = styled.header`
  padding: 75px 0;
  .col {
    display: flex;
    align-items: center;
  }
  .row{
    display: flex;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
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
    a {
      color: ${theme.light};
      font-size: 1.5rem;
      font-weight: 600;
      text-decoration: none;
      :hover {
        box-shadow: inset 0 -10px 0 0 ${theme.light};
      }
      &.active {
        color: ${theme.highlight};
        box-shadow: inset 0 -10px 0 0 ${theme.highlight};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-right: 30px;
`;
