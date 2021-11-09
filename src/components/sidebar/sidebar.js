import React from 'react';
import { ReactComponent as Logo } from '../../images/logo_rd.svg';
import '../../styles/sidebar.css'

const Sidebar = ({ children }) => {
  return (
    <header className="sidebar">
      <div className="logo-image">
        <Logo />
      </div>
      {children}
    </header>
  );
};

export default Sidebar;

