import React from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";
const Navbar = () => {
  const[hamburger,setHamburger]=useState(false)
  return (
    <Nav>
      <Logo to="/home" onClick={()=>setHamburger(false)} >
        {" "}
        <i> {"<Clarusway>"} </i> <span>Recipe</span>{" "}
      </Logo>
<Hamburger onClick={()=>setHamburger(!hamburger)}>
  <GiHamburgerMenu/>
</Hamburger>
      <Menu  onClick={()=>setHamburger(!hamburger)} osman={hamburger}>
        <MenuLink to="/about">  About</MenuLink>
        <a href="https://github.com/farukkursun" target='blank'> Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
