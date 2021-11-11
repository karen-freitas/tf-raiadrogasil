import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import { BasicModal } from '../../components/modals/modals';
import Header from '../../components/Header/Header.js';
import { registerEmployee } from '../../services/firebase';
import '../../styles/register.css';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const colors = [
  "Amarela",
  "Branca",
  "Indígena",
  "Parda",
  "Preta",
  "Outra",
]

const deficiency = [
  'Nenhuma',
  'Visual',
  'Auditiva',
  'Visual',
  'Física',
  'Intelectual',
  'Outra'
];

const gender = [
  'Feminino',
  'Masculino',
  'Não informado'
];

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const [popUpText, setPopUpText] = useState('');
  const [valuesError, setValuesError] = useState({});
  const [value, setValue] = React.useState(colors[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [valueGender, setValueGender] = React.useState(gender[0]);
  const [inputValueGender, setInputValueGender] = React.useState('');

  const [valueDeficiency, setValueDeficiency] = React.useState(deficiency[0]);
  const [inputValueDeficiency, setInputValueDeficiency] = React.useState('');

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    district: '',
    city: '',
    state: '',
    role: '',
    color: value,
    gender: valueGender,
    deficiency: valueDeficiency,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
    inputValidation(name, value);
  };

  const inputValidation = (inputName, inputValue) => {
    let isInvalid = inputValue === '';
    if (inputName === 'email') {
      isInvalid = !/\S+@\S+\.\S+/.test(inputValue);
    }
    setValuesError({
      ...valuesError,
      [inputName]: isInvalid,
    });

  };

  const navigate = useNavigate();
  const routerHome = () => navigate('/');

  const register = () => {
    registerEmployee(values)
      .then(() => setShowModal(true))
      .catch((error) => console.log(error));
    setShowModal(true);
  };

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

  return (
    <>
      <Header name="Cadastro" />
      <div className="form-area">
        <FormPropsTextFields
          id="name"
          name="name"
          label="Nome"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.name}
          helperText={valuesError.name && 'Por favor, preencha o seu nome'}
        />
        <FormPropsTextFields
          id="last-name"
          name="lastName"
          label="Sobrenome"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.lastName}
          helperText={
            valuesError.lastName && 'Por favor, preencha o seu sobrenome'
          }
        />
        <FormPropsTextFields
          id="email"
          name="email"
          label="E-mail"
          className=""
          onChange={handleChange}
          type="email"
          error={valuesError.email}
          helperText={valuesError.email && 'Por favor, preencha o seu e-mail'}
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          label="Telefone"
          className=""
          onChange={handleChange}
          type="number"
          error={valuesError.phone}
          helperText={
            valuesError.phone && 'Por favor, preencha com o seu telefone'
          }
        />
        <FormPropsTextFields
          id="role"
          name="role"
          label="Função"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.role}
          helperText={
            valuesError.role && 'Por favor, preencha com a sua função'
          }
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP"
          className=""
          onChange={handleChange}
          type="number"
          error={valuesError.cep}
          helperText={valuesError.cep && 'Por favor, preencha com o seu CEP'}
          onBlur={handleBlurCep}
        />
        <FormPropsTextFields
          id="address"
          name="address"
          value={values.address}
          label="Endereço"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.adress}
          helperText={
            valuesError.adress && 'Por favor, preencha com o seu endereço'
          }
        />
        <FormPropsTextFields
          id="number"
          name="number"
          value={values.number}
          label="Número"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.number}
          helperText={
            valuesError.number && 'Por favor, preencha com o seu número'
          }
        />
        <FormPropsTextFields
          id="district"
          name="district"
          value={values.district}
          label="Bairro"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.district}
          helperText={
            valuesError.district && 'Por favor, preencha com o seu bairro'
          }
        />
        <FormPropsTextFields
          id="city"
          name="city"
          value={values.city}
          label="Cidade"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.city}
          helperText={
            valuesError.city && 'Por favor, preencha com a sua cidade'
          }
        />
        <FormPropsTextFields
          id="state"
          name="state"
          value={values.state}
          label="Estado"
          className=""
          onChange={handleChange}
          type="text"
          error={valuesError.state}
          helperText={
            valuesError.state && 'Por favor, preencha com o seu estado'
          }
        />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={colors}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Cor" />}
        />
        <Autocomplete
          value={valueGender}
          onChange={(event, newValue) => {
            setValueGender(newValue);
          }}
          inputValue={inputValueGender}
          onInputChange={(event, newInputValue) => {
            setInputValueGender(newInputValue);
          }}
          id="controllable-states-demo"
          options={gender}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Gênero" />}
        />
        <Autocomplete
          value={valueDeficiency}
          onChange={(event, newValue) => {
            setValueDeficiency(newValue);
          }}
          inputValue={inputValueDeficiency}
          onInputChange={(event, newInputValue) => {
            setInputValueDeficiency(newInputValue);
          }}
          id="controllable-states-demo"
          options={deficiency}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Deficiência" />}
        />
      </div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="flex-end">
        <Button
          onClick={() => {
            register()
            setShowModal(true);
            setPopUpText('Cadastro realizado com sucesso!');
          }}
          variant="contained"
          color="success">
          Cadastrar
        </Button>
      </Stack>

      <BasicModal
        showModal={showModal}
        setShowModal={setShowModal}
        popupText={popUpText}
        onClick={routerHome}
      />
    </>
  );
}
