import React from 'react';

import { Check, Form, FormGroup, FormGroupTitle, Input, Select } from '../components/Form';
import Button from '../components/Button';

const VmForm = () => {
  return (
    <>
      <Form>
        <FormGroup>
          <Input label="Sample" help="help sample" invalid={false} />
        </FormGroup>
        <FormGroup>
          <Select label="Sample 2" help="help sample 2" />
        </FormGroup>
        <FormGroup>
          <FormGroupTitle>Select one</FormGroupTitle>
          <Check label="Check A" selected={true} />
          <Check label="Check B" selected={false} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default VmForm;
