import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavListItem = ({ link }) => {
    return (
        <li key={link.linkname}>
            <NavLink to={link.linkpath}>
                {link.linkname}
            </NavLink>
        </li>
    )
};

export default NavListItem;
