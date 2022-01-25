import React from 'react'
import {  useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import { normalInstance, ENDPOINTS } from '../services';
import FormAuth from '../components/organism/FormAuth'

const Login = ({ location }) => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
  const { setLogin } = useAuth();
  const history = useHistory();
  const reference = location?.state?.from?.pathname || '/home';

  const onSubmit = data => {
 
    normalInstance.post(ENDPOINTS.login, data)
    .then((response)=> {
      if(response.data.accessToken){
        setLogin(response.data);
      }

      history.push(reference)
    })
    .catch(error=> {
      console.log(error)
      if (error.response) {
        const msg =  error.response.data.message || 'Contraseña o correo incorrecto!';
        setError("otherErros", {
          type: "manual",
          message: msg.includes('|') ? msg.split('|')[1] : msg
        });
      } 
    
    }).finally(()=> {
      setTimeout(()=> {
        clearErrors(undefined)
      }, 5000)

    })

  };

  return (
    <FormAuth
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
}

export default Login
