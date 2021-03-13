import React from 'react';
import NavList from '../Nav/NavList';

import './Menu.css';

const { navLinks } = require('../../content/links');

const MenuNav = () => {
    return (
        <nav className="MenuNav-wrapper">
            <div className="hamburgerMenu-container display">
                <button className="burger-button">Burger</button>
                <NavList links={navLinks} />
            </div>
            <div className="menu-container display">
                <NavList links={navLinks} />
            </div>
        </nav>
    )
}

export default MenuNav;