import styled from 'styled-components';
import theme from '../../theme';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${theme.darker};
  padding: 20px 0;
`;

const Content = styled.p`
  margin: 0;
`;

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <Content>© {currYear} <b>VMHere</b>. All rights reserved.</Content>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
