import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function index({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Link href="/" passHref>
            <NavLogo>Modernet</NavLogo>
          </Link>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="workflow" smooth={true}>
                Why Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ecommerce" smooth={true}>
                E-Commerce
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <Link href="/calendly" passHref>
              <NavBtnLink>Contact Us</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
