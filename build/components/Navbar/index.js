import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElement';
import Link from 'next/link';
import {FaBars} from 'react-icons/fa';


export default function index() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href="/" passHref>
            <NavLogo>
            dolla
            </NavLogo>
          </Link>
          <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about" smooth={true}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover" smooth={true}>
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services" smooth={true}>
                  Services
                </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to="signup" smooth={true}>
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <Link href="/signin" passHref>
            <NavBtn>
                <NavBtnLink>Sign in</NavBtnLink>
            </NavBtn>
            </Link>
        </NavbarContainer>
      </Nav>
    </>
  )
}
