import ReactLoader from 'react-loader-spinner';
import styled from 'styled-components';

import theme from '../../theme';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Loader = () => (
  <Wrapper>
    <ReactLoader type="TailSpin" color={theme.highlightB} height={80} width={80} />
  </Wrapper>
);

export default Loader;
