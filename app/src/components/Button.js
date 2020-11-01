import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background-color: ${theme.lightB};
  border-width: 0;
  border-radius: 30px;
  color: ${theme.white};
  cursor: pointer;
  font-weight: 900;
  display: inline-flex;
  justify-content: center;
  padding: 14px 30px;
  text-align: center;
  text-transform: uppercase;
  :hover {
    background-color: ${theme.highlight};
  }
  :focus {
    outline: none;
  }
`;

export default Button;
