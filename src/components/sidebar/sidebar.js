import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/icon.png';
import lista from '../../images/lista.png';
import estatis from '../../images/estatis.png';

import { ReactComponent as Logo } from '../../images/logoSuperior_rd.svg';
import { ReactComponent as Slogan } from '../../images/rd-Gente.svg';

import '../../styles/sidebar.css';


const Sidebar = ({ children, onClick }) => {

  const navigate = useNavigate();
  const routerRegister = () => navigate('/cadastro');
  const routerList = () => navigate('/');


  return (
    <header className="sidebar">
      <div className="logo-image">
        <Logo />
      </div>
      <div className="button-group">
        <Button className="button-group-icon" onClick={routerRegister} >
          <img className="group-icon" label="Cadastrar" src={icon} alt="group" />
        </Button>
        <Button className="button-group-icon" onClick={routerList}>
          <img className="group-icon" label="Voltar Lista" src={lista} alt="group" />
        </Button>
        <Button className="button-group-icon" onClick={routerList}>
          <img className="group-icon" label="Grafico" src={estatis} alt="group" />
        </Button>

        
      </div>
      <div className="slogan-image">
        <Slogan />
      </div>
      {children}
    </header>
  );
};

export default Sidebar;
