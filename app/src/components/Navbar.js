import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <div className='my-navHeader'>
      <nav className='myNavbar'>
        <ul className={click ? "my-navMenu active" : "my-navMenu"}>
          <li className='my-navItem'>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              About me
            </Link>
          </li>
          <li className='my-navItem'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              Relevant experience
            </Link>
          </li>
          <li className='my-navItem'>
            <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              Personal projects
            </Link>
          </li>
          <li className='my-navItem'>
            <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              Relevant skills
            </Link>
          </li>
          <li className='my-navItem'>
            <Link to="resume" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              Resume</Link>
          </li>
          <li className='my-navItem'>
            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} className="text-50 no-underline cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </nav >
    </div >
  )
};

export default Navbar;