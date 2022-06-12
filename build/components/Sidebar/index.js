import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarRouter, SidebarMenu, SideBtnWrap } from './SidebarElement';
import Link from 'next/link';

export default function Sidebar({isOpen, toggle}) {
  return (
    <div>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink to="about" smooth={true} onClick={toggle}>
                  About
                </SidebarLink>
                <SidebarLink to="services" smooth={true} onClick={toggle}>
                  Services
                </SidebarLink>
                <SidebarLink to="ecommerce" smooth={true} onClick={toggle}>
                  Ecommerce
                </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
              <Link href="/signin" passHref>
                  <SidebarRouter>
                  Sign In
                  </SidebarRouter>
              </Link>
              </SideBtnWrap>
             
            </SidebarWrapper>
        </SidebarContainer>
    </div>
  )
}