import React, { useState } from 'react';
import FormPropsTextFields from '../input/input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { updateEmployeeProfile } from '../../services/firebase';

const TesteProfile = ({ data, onClick, deleteEmployee }) => {
  const [disableInput, setDisableInput] = useState(false);
  const [values, setValues] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    address: data.address,
    cep: data.cep,
    role: data.role,
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
      <div className="form-area">
        <FormPropsTextFields
          id="name"
          name="name"
          label="Nome"
          className=""
          type="text"
          value={values.name}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="lastName"
          name="lastName"
          label="Sobrenome"
          className=""
          type="text"
          value={values.lastName}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="email"
          name="email"
          label="E-mail"
          className=""
          type="email"
          value={values.email}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          label="Telefone"
          className=""
          type="text"
          value={values.phone}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          label="Endereço"
          className=""
          type="text"
          value={values.address}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP"
          className=""
          type="text"
          value={values.cep}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="role"
          name="role"
          label="Função"
          className=""
          type="text"
          value={values.role}
          onChange={handleChange}
          disabled={disableInput}
        />
      </div>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center">
        <Button
          onClick={() => {
            setDisableInput(!disableInput)
            if (!disableInput) {
              updateEmployeeProfile(
                data.id,
                values.name,
                values.lastName,
                values.email,
                values.phone,
                values.address,
                values.cep,
                values.role)
            }
          }}
          variant="outlined"
          color="success"
        >
          {disableInput ? 'Editar' : 'Salvar'}
        </Button>
        <Button onClick={deleteEmployee} variant="contained" color="success">
          Deletar
        </Button>
      </Stack>
    </>
  );
};

export default TesteProfile;