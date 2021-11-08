import * as React from 'react';
<<<<<<< HEAD
=======
// import {registerEmployee} from '../src/services/firebase'

>>>>>>> 7dc8fdbfd4d451b97f55806804eebc21babfe440
import BasicModal from './components/modals/modals';
import FormPropsTextFields from './components/input/input';
import { useState } from 'react';
import { Button } from '@mui/material';

export function App() {
<<<<<<< HEAD
  return (
    <>
      <BasicModal>
        <FormPropsTextFields id="name" name="name" label="Nome" className="" />
        <FormPropsTextFields id="last-name" name="last-name" label="Sobrenome" className="" />
        <FormPropsTextFields id="email" name="email" label="E-mail" className="" />
        <FormPropsTextFields id="phone" name="phone" label="Telefone" className="" />
=======

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
 
  return (
    <>
      <BasicModal>
        <FormPropsTextFields 
          id="name"
          name="name"
          label="Nome" 
          className="" 
          onChange={handleChange}
        />
        <FormPropsTextFields
          id="last-name" 
          name="lastName" 
          label="Sobrenome" 
          className="" 
          onChange={handleChange}
         />
        <FormPropsTextFields 
          id="email" 
          name="email" 
          label="E-mail" 
          className="" 
          onChange={handleChange}
        />
        <FormPropsTextFields 
          id="phone" 
          name="phone" 
          label="Telefone" 
          className="" 
          onChange={handleChange}
        />
      <Button>Cadastrar</Button>
>>>>>>> 7dc8fdbfd4d451b97f55806804eebc21babfe440
      </BasicModal>
    </>
  );
}

