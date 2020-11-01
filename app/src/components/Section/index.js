import styled from 'styled-components';

import theme from '../../theme';

const Wrapper = styled.section`
  background-color: ${theme.lessDark};
  min-height: 300px;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
`;

export const Section = ({ children }) => (
  <div className="container">
    <Wrapper>
      {children}
    </Wrapper>
  </div>
);

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  width: fit-content;
  :hover{
    color: ${theme.highlight}
  }
`;
