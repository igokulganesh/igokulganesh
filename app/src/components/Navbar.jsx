import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [dropDownShow, setDropDown] = useState(false);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const headers = [
    { label: "About me", to: "hero", offset: -100 },
    { label: "Relevant Experience", to: "experience", offset: -70 },
    { label: "Technical Expertise", to: "skills", offset: -120 },
    { label: "Personal projects", to: "projects", offset: -140 },
    { label: "Contact", to: "contact", offset: -90 },
  ];

  const NavItems = headers.map(item => {
    return (
      <li className='my-navItem' key={item.to}>
        <Link to={item.to} spy={true} smooth={true} offset={item.offset} duration={0} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className='my-navHeader'>
        <nav className='myNavbar'>
          <ul className={click ? "my-navMenu active" : "my-navMenu"}>
            {NavItems}
          </ul>
          <div className='toggle_btn text-900 no-underline'>
            <i className='pi pi-bars' onClick={() => setDropDown(!dropDownShow)} />
          </div>
        </nav >
      </div >
      <div className={`dropdown_menu ${dropDownShow ? "openDropdown" : ""}`}>
        {NavItems}
      </div>
    </>
  )
};

export default Navbar;