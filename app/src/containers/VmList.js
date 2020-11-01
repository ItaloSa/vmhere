import React from 'react';

import { Table, TableBody, TableHead, TableItem, TableRow } from '../components/Table';

const VmList = () => {

  const list = [
    { id: '123123', name: 'sample name', state: 'ON' }
  ];

  return (
    <Table>
      <TableHead>
        <TableItem head>id</TableItem>
        <TableItem head>Name</TableItem>
        <TableItem head>State</TableItem>
        <TableItem head>Action</TableItem>
      </TableHead>
      <TableBody>
        {list.map(item => (
          <TableRow key={`vm-${item.id}`}>
            <TableItem>{item.id}</TableItem>
            <TableItem>{item.name}</TableItem>
            <TableItem>{item.state}</TableItem>
            <TableItem>acts</TableItem>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default VmList;
