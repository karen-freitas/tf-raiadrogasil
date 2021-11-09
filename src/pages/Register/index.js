import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import { Button } from '@mui/material';
import BasicModal from '../../components/modals/modals';


import Header from '../../components/Header/Header.js';

import { registerEmployee } from '../../services/firebase';
import '../../styles/register.css'

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    cep: '',
    role: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const register = () => {
    registerEmployee(values)
      // .then((data) => console.log(data))
      .then(() => setShowModal(true))
      .catch((error) => console.log(error));
    setShowModal(true);
  };


  return (
    <>
      <div className="form-area">
        <FormPropsTextFields
          id="name"
          name="name"
          label="Nome"
          className=""
          onChange={handleChange}
          type="text"
          error={values.name === ""}
          helperText={values.name === "" ? 'Por favor, preencha o seu nome' : ""}
        />
        <FormPropsTextFields
          id="last-name"
          name="lastName"
          label="Sobrenome"
          className=""
          onChange={handleChange}
          type="text"
          error={values.lastName === ""}
          helperText={values.lastName === "" ? 'Por favor, preencha o seu sobrenome' : ""}
        />
        <FormPropsTextFields
          id="email"
          name="email"
          label="E-mail"
          className=""
          onChange={handleChange}
          type="email"
          error={values.email === ""}
          helperText={values.email === "" ? 'Por favor, preencha o seu e-mail' : ""}
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          label="Telefone"
          className=""
          onChange={handleChange}
          type="text"
          error={values.phone === ""}
          helperText={values.phone === "" ? 'Por favor, preencha com o seu telefone' : ""}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          label="Endereço"
          className=""
          onChange={handleChange}
          type="text"
          error={values.address === ""}
          helperText={values.address === "" ? 'Por favor, preencha com o seu endereço' : ""}
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP"
          className=""
          onChange={handleChange}
          type="text"
          error={values.cep === ""}
          helperText={values.cep === "" ? 'Por favor, preencha com o seu CEP' : ""}
        />
        <FormPropsTextFields
          id="role"
          name="role"
          label="Função"
          className=""
          onChange={handleChange}
          type="text"
          error={values.role === ""}
          helperText={values.role === "" ? 'Por favor, preencha com o sua função' : ""}
        />
      </div>
      <Button onClick={() => register()}>Cadastrar</Button>
      <BasicModal showModal={showModal} setShowModal={setShowModal}>
        <p>Cadastrado com sucesso!</p>
      </BasicModal>

    </>
  );
}
