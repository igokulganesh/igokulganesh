import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [dropDownShow, setDropDown] = useState(false);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const headers = [
    { label: "About me", to: "hero" },
    { label: "Relevant experience", to: "about" },
    { label: "Personal projects", to: "projects" },
    { label: "Relevant skills", to: "skills" },
    { label: "Resume", to: "resume" },
    { label: "Contact", to: "contact" },
  ];

  const NavItems = headers.map(item => {
    return (
      <li className='my-navItem'>
        <Link to={item.to} spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
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