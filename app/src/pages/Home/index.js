import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Section, SectionContent, SectionTitle } from '../../components/Section';
import { Table, TableBody, TableHead, TableItem } from '../../components/Table';

const Home = () => (
  <>
    <Header />
    <Section>
      <SectionTitle>Your VMs</SectionTitle>
      <SectionContent>
        <Table>
          <TableHead>
            <TableItem head>id</TableItem>
            <TableItem head>Name</TableItem>
            <TableItem head>State</TableItem>
            <TableItem head>Action</TableItem>
          </TableHead>
          <TableBody>
            <TableItem>1</TableItem>
            <TableItem>a</TableItem>
            <TableItem>b</TableItem>
            <TableItem>c</TableItem>
          </TableBody>
        </Table>
      </SectionContent>
    </Section>
    <Footer />
  </>
);

export default Home;
