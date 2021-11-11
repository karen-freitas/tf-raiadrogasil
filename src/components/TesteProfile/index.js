import React, { useState } from 'react';
import FormPropsTextFields from '../input/input';
import { BasicModal, DeleteModal } from '../modals/modals';
import { ReactComponent as EditButton } from '../../images/button_edit.svg';
import { ReactComponent as DeleteButton } from '../../images/button_delete.svg';
import { ReactComponent as SaveButton } from '../../images/button_save.svg';
import { ReactComponent as ReturnButton } from '../../images/return.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { updateEmployeeProfile } from '../../services/firebase'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import '../../styles/testeProfile.css'
import icon from '../../images/avatar.png';

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
    cep: data.cep,
    address: data.address,
    number: data.number,
    district: data.district,
    city: data.city,
    state: data.state,
    role: data.role,
    color: data.color,
    gender: data.gender,
    deficiency: data.deficiency,
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

      <Stack
        direction="column"
        spacing={2}
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center">
        <h2>{values.name}</h2>
        <h4>{values.role}</h4>
        <img src={icon} alt="Avatar" />
      </Stack>
      <div className="form-area">
        <FormPropsTextFields
          id="name"
          name="name"
          value={values.name}
          label="Nome"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="last-name"
          name="lastName"
          value={values.lastName}
          label="Sobrenome"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="email"
          name="email"
          value={values.email}
          label="E-mail"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="email"
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          value={values.phone}
          label="Telefone"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="number"
        />
        <FormPropsTextFields
          id="role"
          name="role"
          value={values.role}
          label="Função"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          value={values.cep}
          label="CEP"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="number"
          onBlur={handleBlurCep}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          value={values.address}
          label="Endereço"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="number"
          name="number"
          value={values.number}
          label="Número"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="district"
          name="district"
          value={values.district}
          label="Bairro"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="city"
          name="city"
          value={values.city}
          label="Cidade"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormPropsTextFields
          id="state"
          name="state"
          value={values.state}
          label="Estado"
          className=""
          onChange={handleChange}
          disabled={disableInput}
          type="text"
        />
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-helper-label">Cor</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="color"
            value={values.color}
            label="Color"
            onChange={handleChange}
            disabled={disableInput}
          >
            <MenuItem value="Amarela">Amarela</MenuItem>
            <MenuItem value="Branca">Branca</MenuItem>
            <MenuItem value="Indígena">Indígena</MenuItem>
            <MenuItem value="Preta">Preta</MenuItem>
            <MenuItem value="Parda">Parda</MenuItem>
            <MenuItem value="Outra">Outra</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-helper-label">Deficiência</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="deficiency"
            value={values.deficiency}
            label="Deficiência"
            onChange={handleChange}
            disabled={disableInput}
          >
            <MenuItem value="Nenhuma">Nenhuma</MenuItem>
            <MenuItem value="Visual">Visual</MenuItem>
            <MenuItem value="Auditiva">Auditiva</MenuItem>
            <MenuItem value="Visual">Visual</MenuItem>
            <MenuItem value="Física">Física</MenuItem>
            <MenuItem value="Intelectual">Intelectual</MenuItem>
            <MenuItem value="Outra">Outra</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-helper-label">Gênero</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            name="gender"
            value={values.gender}
            label="Gênero"
            onChange={handleChange}
            disabled={disableInput}
          >
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Não informado">Não informado</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Stack
        direction="row"
        spacing={2}
        display="flex"
        marginTop="10rem"
        width="100%"
        justifyContent="end"
        alignItems="center">
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
                values.address,
                values.cep,
                values.role,
                values.number,
                values.district,
                values.city,
                values.state,
                values.role,
                values.color,
                values.gender,
                values.deficiency,
              );
              setShowModal(true);
              setPopUpText('Perfil do funcionário atualizado com sucesso!');
            }
          }}>
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
          }}>
          <DeleteButton />
        </Button>
      </Stack>
    </>
  );
};

export default TesteProfile;
