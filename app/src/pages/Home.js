import React from 'react';

import { Section, SectionContent, SectionTitle } from '../components/Section';
import VmList from '../containers/VmList';

const Home = () => (
  <Section>
    <SectionTitle>Your VMs</SectionTitle>
    <SectionContent>
      <VmList />
    </SectionContent>
  </Section>
);

export default Home;
