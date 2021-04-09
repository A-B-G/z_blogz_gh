import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavListItem = ({ link }) => {
    return (
        <li key={`${link.linkname}-li`} className="navList-li">
            <NavLink to={link.linkpath}>
                {link.linkname}
            </NavLink>
        </li>
    )
};

export default NavListItem;
