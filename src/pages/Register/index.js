import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Form from '../../components/form/form';
import './styles.css'

const useStyles = makeStyles({
  root: {
    "flex-wrap": 'wrap',
  },
});

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


  const classes = useStyles();

  return (
    <>
      <div>
        <h2>Cadastro</h2>
        <p>Insira as informações do seu colaborador</p>
      </div>
      <div class="form-area">
        <Form>
          <FormPropsTextFields
            id="name"
            name="name"
            label="Nome"
            className={classes.root}
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
          <FormPropsTextFields
            id="address"
            name="address"
            label="Endereço"
            className=""
            onChange={handleChange}
          />
          <FormPropsTextFields
            id="role"
            name="role"
            label="Função"
            className=""
            onChange={handleChange}
          />
          <Button>Cadastrar</Button>
        </Form>
      </div>
    </>
  );
}