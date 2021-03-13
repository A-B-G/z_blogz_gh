import React from 'react';
import NavListItem from './NavListItem';
import './Nav.css';

const NavList = ({ links }) => {
    return (
        <ul className="navList-ul">
            {links.map(link => <NavListItem link={link} />)}
        </ul>
    )
}

export default NavList;
