import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const LinkListItem = ({ link }) => {
    return (
        <li key={`${link.linkname}-li`} className="linkList-li">
            <NavLink to={link.linkpath}>
                {link.linkname}
            </NavLink>
        </li>
    )
};

export default LinkListItem;
