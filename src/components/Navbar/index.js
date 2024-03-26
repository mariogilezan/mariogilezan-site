import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  Logo,
  MenuIconWrapper,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
} from "./NavbarElements"
import { TextHighlight } from "../../styles/globalStyles"
import SocialLinks from "../SocialLinks"
import MobileMenu from "../MobileMenu"

export default function Navbar({ isOpen, toggle }) {
  const { menuLinks } = useSiteMetadata()
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <TextHighlight>M</TextHighlight>G
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavItem key={link.name}>
                <NavLink to={link.slug} activeStyle={{ color: "#00a4ea" }}>
                  {link.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          <SocialLinks />
          <MenuIconWrapper onClick={toggle}>
            <span>menu</span>
          </MenuIconWrapper>
          <MobileMenu isOpen={isOpen} toggle={toggle} />
        </NavContainer>
      </Nav>
    </>
  )
}
