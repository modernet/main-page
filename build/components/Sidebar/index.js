import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElement'

const Sidebar = () => {
  return (
    <div>
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink to="about">
                  About
                </SidebarLink>
                <SidebarLink to="discover">
                  Discover
                </SidebarLink>
                <SidebarLink to="services">
                  Services
                </SidebarLink>
                <SidebarLink to="signup">
                  Signup
                </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                <SidebarRoute>
                  Sign In
                </SidebarRoute>
              </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    </div>
  )
}

export default Sidebar
