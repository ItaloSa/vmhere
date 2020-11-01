import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';


const THead = styled.thead`
  th {
    font-weight: bold;
    padding: .75rem;
  }
  /* border-bottom: 2px solid ${theme.light}; */
`;

const TBody = styled.tbody`
box-sizing: content-box;
  tr {
    border-bottom: 1px solid ${theme.light};
  }
  td {
    padding: .75rem;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = ({ children }) => (
  <THead>
    <tr>
      {children}
    </tr>
  </THead>
);

export const TableBody = ({ children }) => (
  <TBody>
    <tr>
      {children}
    </tr>
  </TBody>
);

export const TableItem = ({ children, head = false }) => {
  if (head) {
    return (<th>{children}</th>);
  } else {
    return (<td>{children}</td>);
  }
};
