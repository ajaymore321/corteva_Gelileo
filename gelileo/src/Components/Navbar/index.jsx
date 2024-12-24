import React, { useState } from "react";
import { NavLink } from "react-router-dom";  
// import LeftArrow from '../../assets/images/Left_Arrow.png' 

const NavbarHook = ({ toggleSidebar }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
 
 
  return (
    <>
 
      <header className="navbar navbar-light bg-light justify-content-between px-3 p-3">
        <button className="" onClick={toggleSidebar}>
          {/* <img src={LeftArrow} alt="left-arrow" style={{ height: '30px' }} /> */}Hello
        </button>
        <div className="d-flex justify-between gap-2">
          <span className="userRole">{'Ajay'} </span><span> </span>
        </div>
      </header>

    </>
  );
};

export default NavbarHook;
