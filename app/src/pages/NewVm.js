import React from 'react';

import { Section, SectionContent, SectionTitle } from '../components/Section';
import NewVMForm from '../containers/NewVMForm';

const NewVm = () => {
  return (
    <Section>
      <SectionTitle>New VM</SectionTitle>
      <SectionContent>
        <NewVMForm />
      </SectionContent>
    </Section>
  );
};

export default NewVm;
