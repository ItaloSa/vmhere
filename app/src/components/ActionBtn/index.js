import styled from 'styled-components';

import theme from '../../theme';

const Wrapper = styled.div`
  cursor: pointer;
  :hover {
    svg {
      fill: ${theme.highlight};
    }
  }
`;

const ActionBtn = ({ icon: Icon, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon />
    </Wrapper>
  );
}

export default ActionBtn;
