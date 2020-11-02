import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { ApiContext } from '../index';
import Loader from '../components/Loader';

import VmForm from './VmForm';

const NewVMForm = () => {
  const [isLoading, setLoading] = useState(false);
  const api = useContext(ApiContext);
  const history = useHistory();
  const { register, handleSubmit, watch, setValue, errors } = useForm({
    defaultValues: { memory: 1, cpu_n: 1, os: 'Ubuntu (64-bit)' }
  });

  const onSubmitHandler = async (values) => {
    console.log(values);
    setLoading(true);
    const { data: result } = await api.post('/vms', values);
    if (result.code === 'OK') {
      toast.success('VM created successfully');
      history.push('/');
    } else if (result.code === 'DUPLICATED') {
      toast.warn('This name is already in use.')
    } else {
      toast.error('VM error on create. Try again later.');
    }
    setLoading(false);
  };

  if (isLoading) return (<Loader />);

  return (
    <div className="row">
      <div className="col-6">
        <VmForm
          handleSubmit={handleSubmit(onSubmitHandler)}
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default NewVMForm;
