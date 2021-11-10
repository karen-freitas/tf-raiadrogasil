import React from 'react';
import FormPropsTextFields from '../../components/input/input';
import { useState } from 'react';
import BasicModal from '../../components/modals/modals';
import Header from '../../components/Header/Header.js';
import { registerEmployee } from '../../services/firebase';
import '../../styles/register.css';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const options = ['Option 1', 'Option 2'];

export default function Register() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    district: '',
    city: '',
    state: '',
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

  const navigate = useNavigate();
  const routerHome = () => navigate('/');

  const register = () => {
    registerEmployee(values)
      .then(() => setShowModal(true))
      .catch((error) => console.log(error));
    setShowModal(true);
  };

  const handleBlurCep = (e) => {
    const value = Number(e.target.value);
    if (value >= 10000000 && value < 99999999) {
      dataCEP(value);
    } else {
      alert('O cep é inválido: ' + e.target.value);
    }
  };

  const dataCEP = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((json) => json.json())
      .then((response) => {
        console.log(response);

        if (!response.erro) {
          console.log(response.localidade);
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
          error={values.name === ''}
          helperText={
            values.name === '' ? 'Por favor, preencha o seu nome' : ''
          }
        />
        <FormPropsTextFields
          id="last-name"
          name="lastName"
          label="Sobrenome"
          className=""
          onChange={handleChange}
          type="text"
          error={values.lastName === ''}
          helperText={
            values.lastName === '' ? 'Por favor, preencha o seu sobrenome' : ''
          }
        />
        <FormPropsTextFields
          id="email"
          name="email"
          label="E-mail"
          className=""
          onChange={handleChange}
          type="email"
          error={!/\S+@\S+\.\S+/.test(values.email)}
          helperText={
            !/\S+@\S+\.\S+/.test(values.email)
              ? 'Por favor, preencha o seu e-mail'
              : ''
          }
        />
        <FormPropsTextFields
          id="phone"
          name="phone"
          label="Telefone"
          className=""
          onChange={handleChange}
          type="text"
          error={values.phone === ''}
          helperText={
            values.phone === '' ? 'Por favor, preencha com o seu telefone' : ''
          }
        />
        <FormPropsTextFields
          id="role"
          name="role"
          label="Função"
          className=""
          onChange={handleChange}
          type="text"
          error={values.role === ''}
          helperText={
            values.role === '' ? 'Por favor, preencha com o sua função' : ''
          }
        />
        <FormPropsTextFields
          id="cep"
          name="cep"
          label="CEP"
          className=""
          onChange={handleChange}
          type="text"
          error={values.cep.length !== 8}
          helperText={
            values.cep.length !== 8 ? 'Por favor, preencha com o seu CEP' : ''
          }
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
          error={values.address === ''}
          helperText={
            values.address === ''
              ? 'Por favor, preencha com o seu endereço'
              : ''
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
          error={values.number === ''}
          helperText={
            values.number === '' ? 'Por favor, preencha com o seu número' : ''
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
          error={values.district === ''}
          helperText={
            values.district === '' ? 'Por favor, preencha com o seu bairro' : ''
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
          error={values.city === ''}
          helperText={
            values.city === '' ? 'Por favor, preencha com a sua cidade' : ''
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
          error={values.state === ''}
          helperText={
            values.state === '' ? 'Por favor, preencha com o seu estado' : ''
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
          error={values.state === ''}
          helperText={
            values.state === '' ? 'Por favor, preencha com o seu estado' : ''
          }
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
                 
      </div>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="flex-end">
        <Button onClick={register} variant="contained" color="success">
          Cadastrar
        </Button>
      </Stack>

      <BasicModal showModal={showModal} setShowModal={setShowModal}>
        <p style={{ color: 'green', fontSize: '1.5em', textAlign: 'center' }}>
          Cadastrado com sucesso!
        </p>

        <Button onClick={routerHome} variant="contained" color="success">
          OK
        </Button>
      </BasicModal>
    </>
  );
}




