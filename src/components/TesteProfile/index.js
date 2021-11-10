import React, { useState } from 'react';
import FormPropsTextFields from '../input/input';
import { BasicModal, DeleteModal } from '../modals/modals';
import { ReactComponent as EditButton } from '../../images/button_edit.svg';
import { ReactComponent as DeleteButton } from '../../images/button_delete.svg';
import { ReactComponent as SaveButton } from '../../images/button_save.svg';
import { ReactComponent as ReturnButton } from '../../images/return.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { updateEmployeeProfile } from '../../services/firebase';
import '../../styles/testeProfile.css'

const TesteProfile = ({ data, onClick, deleteEmployee }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [disableInput, setDisableInput] = useState(true);
  const [values, setValues] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    role: data.role,
    cep: data.cep,
    address: data.address,
    number: data.number,
    district: data.district,
    city: data.city,
    state: data.state,
  });

  const handleBlurCep = (e) => {
    const value = e.target.value;
    if (value.length === 8) {
      dataCEP(value);
    } else {
      alert('O cep é inválido: ' + e.target.value);
    }
  };

  const dataCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((json) => json.json())
      .then((response) => {
        if (!response.erro) {
          setValues({
            ...values,
            address: response.logradouro,
            district: response.bairro,
            city: response.localidade,
            state: response.uf,
          });
        } else {
          alert('CEP inválido');
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container-return">
        <Button onClick={onClick}>
          <ReturnButton />
        </Button>
      </div>

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
          id="role"
          name="role"
          label="Função"
          className=""
          type="text"
          value={values.role}
          onChange={handleChange}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP (somente números)"
          className=""
          onChange={handleChange}
          type="text"
          value={values.cep}
          onBlur={handleBlurCep}
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          value={values.address}
          label="Endereço"
          className=""
          onChange={handleChange}
          type="text"
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="number"
          name="number"
          value={values.number}
          label="Número"
          className=""
          onChange={handleChange}
          type="text"
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="district"
          name="district"
          value={values.district}
          label="Bairro"
          className=""
          onChange={handleChange}
          type="text"
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="city"
          name="city"
          value={values.city}
          label="Cidade"
          className=""
          onChange={handleChange}
          type="text"
          disabled={disableInput}
        />
        <FormPropsTextFields
          id="state"
          name="state"
          value={values.state}
          label="Estado"
          className=""
          onChange={handleChange}
          type="text"
          disabled={disableInput}
        />
      </div>
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        marginTop="10rem"
        width="100%"
        justifyContent="end"
        alignItems="center"
      >
        <BasicModal
          popupText={popUpText}
          showModal={showModal}
          setShowModal={setShowModal}
          onClick={onClick}
        />
        <Button
          onClick={() => {
            setDisableInput(!disableInput);
            if (!disableInput) {
              updateEmployeeProfile(
                data.id,
                values.name,
                values.lastName,
                values.email,
                values.phone,
                values.role,
                values.cep,
                values.address,
                values.number,
                values.district,
                values.city,
                values.state,
              );
              setShowModal(true);
              setPopUpText('Perfil do funcionário atualizado com sucesso!');
            }
          }}
        >
          {disableInput ? <EditButton /> : <SaveButton />}
        </Button>
        <DeleteModal
          popupText={popUpText}
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
          onClick={deleteEmployee}
        />
        <Button
          onClick={() => {
            setShowModalDelete(true);
            setPopUpText('Gostaria de confirmar a exclusão do funcionário?');
          }}
        >
          <DeleteButton />
        </Button>
      </Stack>
    </>
  );
};

export default TesteProfile;
