import React from 'react';
import {  NavLink } from 'react-router-dom';


const SideMenu = () => {

    return (
        <aside className="p-3 text-white" style={{ width: '250px', minHeight: '100vh' }}>
            <div className="mb-3">
                <h3 className='Nunito, cursive'>Gelileo</h3>
            </div>
            <ul className="nav nav-pills flex-contents mb-auto">
           
                <li className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? 'nav-link text-white active fw-500' : 'nav-link text-white'}
                        style={({ isActive }) => ({ backgroundColor: isActive ? '#FF9933' : 'transparent', width: "170px" })}
                    >
                        Dashboard
                    </NavLink>
     
                </li>
            </ul>
        </aside>
    );
};

export default SideMenu;
