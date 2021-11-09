import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import { Button } from '@mui/material';
import { registerEmployee, deleteEmployee } from '../../services/firebase';
import Header from '../../components/Header/Header.js';

export default function Register() {
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

  const register = () => {
    registerEmployee(values)
      .then((data) => console.log(data))
      .catch(console.log('erro'));
  };


  return (
    <>

        <Header
          name="Cadastro"
        />


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
      <Button onClick={()=>register()}>Cadastrar</Button>
    </>
  );
}
