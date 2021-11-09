import React from 'react';


const TesteProfile = ({ data, onClick, deleteEmployee}) => {
    return (
      <>
        <h1>{data.name}</h1>
        <h1>{data.lastName}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>

      <button onClick={onClick}>fechar</button>
      <button onClick={deleteEmployee}>Deletar</button>
      </>
    );
};

export default TesteProfile;

