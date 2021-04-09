import React from 'react';
import NavListItem from './NavListItem';
import './Nav.css';

const LinksList = ({ links }) => {
    
    return (
        <ul className={`linkList-ul`}>
            {links.map(link => <NavListItem link={link} />)}
        </ul>
    )
}

export default LinksList;
