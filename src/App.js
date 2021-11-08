import * as React from 'react';
// import {registerEmployee} from '../src/services/firebase'

import BasicModal from './components/modals/modals';
import FormPropsTextFields from './components/input/input';

export function App() {
 
  return (
    <>
      <BasicModal>
        <FormPropsTextFields id="name" name="name" label="Nome" className="" />
        <FormPropsTextFields id="last-name" name="last-name" label="Sobrenome" className="" />
        <FormPropsTextFields id="email" name="email" label="E-mail" className="" />
        <FormPropsTextFields id="phone" name="phone" label="Telefone" className="" />
      </BasicModal>
    </>
  );
}

