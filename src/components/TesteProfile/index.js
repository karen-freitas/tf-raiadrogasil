import React from 'react';
import FormPropsTextFields from '../input/input';
import '../../styles/testeProfile.css'



const TesteProfile = ({ data, onClick, deleteEmployee}) => {
    return (
      <>

        <div className="form-area">
          <FormPropsTextFields
            disabled={true}
            id="name"
            value={data.name}
            // label="Nome"
            className="name-profile"
            type="text"

          />
          <FormPropsTextFields
            disabled={true}
            id="last-name"
            name={data.lastName}
            label="Sobrenome"
            className=""
            type="text"
          />
          <FormPropsTextFields
            disabled={true}
            id="email"
            name={data.email}
            label="E-mail"
            className=""
            type="email"
          />
          <FormPropsTextFields
            disabled={true}
            id="phone"
            name={data.phone}
            label="Telefone"
            className=""
            type="text"
          />
          <FormPropsTextFields
            disabled={true}
            id="address"
            name={data.address}
            label="Endereço"
            className=""
            type="text"
          />
          <FormPropsTextFields
            disabled={true}
            id="cep"
            name={data.cep}
            label="CEP"
            className=""
            type="text"
          />
          <FormPropsTextFields
            disabled={true}
            id="role"
            name={data.funcao}
            label="Função"
            className=""
            type="text"
          />
        </div>

      <button onClick={onClick}>fechar</button>
      <button onClick={deleteEmployee}>Deletar</button>
      </>
    );
};

export default TesteProfile;






