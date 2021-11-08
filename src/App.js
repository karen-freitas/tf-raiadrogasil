import * as React from 'react';
// import {registerEmployee} from '../src/services/firebase'

import BasicModal from './components/modals/modals';
import FormPropsTextFields from './components/input/input';
import { useState } from 'react';
import { Button } from '@mui/material';

export function App() {

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
      </BasicModal>
    </>
  );
}

