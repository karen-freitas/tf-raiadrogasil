import React from 'react';
import { ReactComponent as Logo } from '../../images/logoSuperior_rd.svg';
import { ReactComponent as Slogan } from '../../images/rd-Gente.svg';

import '../../styles/sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <header className="sidebar">
      <div className="logo-image">
        <Logo />
      </div>
      <div className="slogan-image">
        <Slogan />
      </div>
      {children}
    </header>
  );
};

export default Sidebar;
