import React, { useState } from "react"
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
import { HamburgerMenu, TextHighlight } from "../../styles/globalStyles"
import SocialLinks from "../SocialLinks"
import MobileMenu from "../MobileMenu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { menuLinks } = useSiteMetadata()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
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
        <MenuIconWrapper onClick={toggleMenu}>
          <HamburgerMenu />
        </MenuIconWrapper>
        <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
      </NavContainer>
    </Nav>
  )
}
