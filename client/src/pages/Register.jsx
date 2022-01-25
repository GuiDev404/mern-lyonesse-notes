import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { normalInstance, ENDPOINTS } from '../services';
import FormAuth from '../components/organism/FormAuth';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
  const { push } = useHistory();

  const onSubmit = data => {
    normalInstance.post(ENDPOINTS.register, data)
      .then((response)=> {
        showToast({ type: 'success', text: response.data.message })

        setTimeout(()=> {
          push('/login')
        }, 5000)
      })
      .catch(error=> {
        if(error.response){
          const msg = error.response.data.message || 'Datos de registro incorrectos!';
    
          showToast({ type: 'danger', text: msg.split('|')[0] })

          setError("otherErros", {
            type: "manual",
            message: msg.split('|')[0]
          });
        }
      }).finally(()=> {
        setTimeout(()=> {
          hideToastAndClear()
          clearErrors(undefined)
        }, 5000)
      })
  };

  return (
    <>
      <FormAuth
        isRegister
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </>
  );
}

export default Register
