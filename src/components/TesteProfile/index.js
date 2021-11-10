import React from 'react';
import Header from '../Header/Header';
import FormPropsTextFields from '../input/input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TesteProfile = ({ data, onClick, deleteEmployee }) => {
  return (
    <>
      <div className="form-area">
        <FormPropsTextFields
          id="name"
          name="name"
          label="Nome"
          className=""
          type="text"
          value={data.name}
        />

        <FormPropsTextFields
          id="lastName"
          name="lastName"
          label="Sobrenome"
          className=""
          type="text"
          value={data.lastName}
        />
        <FormPropsTextFields
          id="email"
          name="email"
          label="E-mail"
          className=""
          type="email"
          value={data.email}
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          label="Telefone"
          className=""
          type="text"
          value={data.phone}
        />
        <FormPropsTextFields
          id="role"
          name="role"
          label="Função"
          className=""
          type="text"
          value={data.role}
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP"
          className=""
          type="text"
          value={data.cep}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          label="Endereço"
          className=""
          type="text"
          value={data.address}
        />
        <FormPropsTextFields
          id="number"
          name="number"
          label="Número"
          className=""
          type="text"
          value={data.number}
        />
        <FormPropsTextFields
          id="district"
          name="district"
          label="Bairro"
          className=""
          type="text"
          value={data.district}
        />
        <FormPropsTextFields
          id="city"
          name="city"
          label="Cidade"
          className=""
          type="text"
          value={data.city}
        />
        <FormPropsTextFields
          id="state"
          name="state"
          label="Estado"
          className=""
          type="text"
          value={data.state}
        />
      </div>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center">
        <Button onClick={onClick} variant="outlined" color="success">
          Voltar
        </Button>
        <Button onClick={deleteEmployee} variant="contained" color="success">
          Deletar
        </Button>
      </Stack>
    </>
  );
};

export default TesteProfile;
