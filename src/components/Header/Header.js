import React from 'react';
import '../../styles/header.css';



const Header = ({ children, className, name }) => {
    return (
        <header className="header">
            {children}
            <div
             className={className ? className : "header"}
             />
            <h1 className="name-header">{name}</h1>

            <hr />
        </header>
    );
};
export default Header;