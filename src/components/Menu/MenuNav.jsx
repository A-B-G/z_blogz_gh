import React from 'react';
import NavList from '../Nav/NavList';
// import FlowerLogo from '../../images/flower_img.png';

import './Menu.css';

const { navLinks } = require('../../content/links');

const MenuNav = ({ open, setOpen }) => {

    const handleToggle = () => {
        setOpen(!open);
    }

    const toggleMenu = open ? "toggle-open" : "toggle-closed";

    return (
        <nav className="MenuNav-wrapper">
            <div className="hamburgerMenu-container display">
                

                <button className="burger-button" 
                    onClick={handleToggle}
                >Burger
                </button>
                <div className="flower-logo image" />
                {/* <img src={FlowerLogo} style={{width: '100px', height: '100px'}} /> */}
            </div>
            <div className={`menu-container display ${toggleMenu}`}>
                <div className="flower-logo image" />
                <NavList links={navLinks} />
            </div>
        </nav>
    )
}

export default MenuNav;