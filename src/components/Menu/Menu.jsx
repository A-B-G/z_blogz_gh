import React, { useState } from 'react';
import MenuNav from './MenuNav';

import './Menu.css';

const Menu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="Menu-wrapper">
                <MenuNav open={open} setOpen={setOpen} />
            <h1>Menu</h1>
            
        </div>
    )

}

export default Menu;
