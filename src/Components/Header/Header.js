import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <NavLink className='navlink link '  to = "/breakfast">breakfast</NavLink> 

             <NavLink className='navlink link '  to = "/lunch">lunch</NavLink> 

             <NavLink className='navlink link '  to = "/dinner">dinner</NavLink> 
        </div>
    );
};

export default Header;