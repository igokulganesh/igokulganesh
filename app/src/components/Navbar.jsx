import React, { useState } from "react";
import { Link } from "react-scroll";
import "../assets/css/Navbar.css";
import { classNames } from "primereact/utils";

const headers = [
  { label: "About me", to: "hero", offset: 0 },
  { label: "Experience", to: "experience", offset: -50 },
  { label: "Technical Expertise", to: "skills", offset: -90 },
  { label: "Personal projects", to: "projects", offset: -90 },
  { label: "Contact", to: "contact", offset: -120 },
];

const Navbar = () => {
  const [dropDownShow, setDropDown] = useState(false);

  const [activeItem, setActiveItem] = useState("");

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  const NavItems = headers.map((item) => {
    return (
      <li className="my-navItem" key={item.to}>
        <Link
          to={item.to}
          spy={true}
          smooth={true}
          offset={item.offset}
          duration={10}
          onClick={() => setDropDown(false)}
          onSetActive={handleSetActive}
          className={classNames("text-white	no-underline cursor-pointer", {
            "active-nav": activeItem === item.to,
          })}
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="my-navHeader">
        <nav className="myNavbar">
          <ul className={dropDownShow ? "my-navMenu active" : "my-navMenu"}>
            {NavItems}
          </ul>
          <div className="toggle_btn text-900 no-underline">
            <i
              className={!dropDownShow ? "pi pi-bars" : "pi pi-times"}
              onClick={() => setDropDown(!dropDownShow)}
            />
          </div>
        </nav>
      </div>
      <div className={`dropdown_menu ${dropDownShow ? "openDropdown" : ""}`}>
        {NavItems}
      </div>
    </>
  );
};

export default Navbar;
