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
  <TBody>{children}</TBody>
);

export const TableRow = styled.tr`
  border-bottom: 1px solid ${theme.light};
`;

export const TableItem = ({ children, head = false }) => {
  if (head) {
    return (<th>{children}</th>);
  } else {
    return (<td>{children}</td>);
  }
};
