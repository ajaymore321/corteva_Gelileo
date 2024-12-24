import React, { useState } from 'react';  
import SideMenu from '../SideMenu';
import NavbarHook from '../Navbar/index'

const Layout = ({ children }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <div className="d-flex">
            {isSidebarVisible && < SideMenu/>}
            <div className={`d-flex flex-column flex-grow-1 ${isSidebarVisible ? '' : 'ml-0'}`}>
                <NavbarHook toggleSidebar={toggleSidebar} />
                <main className={`flex-grow-1 ${isSidebarVisible ? 'ml-250px' : 'ml-0'}`} style={{ transition: 'margin-left 0.3s' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;