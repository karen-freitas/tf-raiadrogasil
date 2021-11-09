import React from 'react';


const TesteProfile = ({ data, onClick}) => {
    return (
      <>
        <h1>{data.name}</h1>
        <h1>{data.lastName}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phone}</h1>

      <button onClick={onClick}>fechar</button>
      </>
    );
};

export default TesteProfile;

