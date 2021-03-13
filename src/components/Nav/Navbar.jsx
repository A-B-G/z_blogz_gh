import React from 'react';
import Menu from '../Menu/Menu';
import './Nav.css';

const Navbar = () => {
    return (
        <div className="Navbar-wrapper">
            <nav className="Navbar-container">
                <Menu />
            </nav>
            <h1>Nav</h1>
        </div>
    )
}

export default Navbar;
