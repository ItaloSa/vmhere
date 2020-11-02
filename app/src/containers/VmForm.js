import React from 'react';

import { Check, Form, FormGroup, FormGroupTitle, Input, Select } from '../components/Form';
import Button from '../components/Button';

const selectValues = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' }
];

const avalibleOs = [
  { value: 'Ubuntu (64-bit)', label: 'Ubuntu (64-bit)' },
  { value: 'Windows 2008 (64-bit)', label: 'Windows 2008 (64-bit)' }
];

const VmForm = ({ register, setValue, watch, errors, handleSubmit }) => {
  return (
    <>
      <Form onSubmit={handleSubmit} >
        <FormGroup>
          <Input
            name="name"
            label="Name"
            help="Give your vm a name"
            invalid={!!errors.name}
            ref={register({ required: true })}
          />
        </FormGroup>
        <FormGroup>
          <Select
            name="memory"
            label="Memory"
            help="Select the amount of memory"
            ref={register}
            options={selectValues}
          />
        </FormGroup>
        <FormGroup>
          <Select
            name="cpu_n"
            label="CPUs"
            help="Select the quantity of CPUs"
            ref={register}
            options={selectValues}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupTitle>Choose an OS</FormGroupTitle>
          {avalibleOs.map((item, idx) => (
            <Check
              key={`os-check-${idx}`}
              name="os"
              label={item.label}
              value={item.value}
              defaultChecked={watch('os')}
              setField={(value) => setValue('os', value)}
              ref={register({ required: true })}
            />
          ))}
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default VmForm;
