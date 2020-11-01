import React from 'react';

import { Section, SectionContent, SectionTitle } from '../components/Section';
import VmForm from '../containers/VmForm';

const NewVm = () => {
  return (
    <Section>
      <SectionTitle>New VM</SectionTitle>
      <SectionContent>
        <div className="row">
          <div className="col-6">
            <VmForm />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default NewVm;
