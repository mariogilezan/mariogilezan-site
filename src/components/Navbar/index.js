import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
} from "./NavbarElements"
import { TextHighlight } from "../../styles/globalStyles"

export default function Navbar() {
  const { menuLinks } = useSiteMetadata()
  console.log(menuLinks)
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo offset="100" href="#home">
            <TextHighlight>M</TextHighlight>G
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavItem key={link.name}>
                <NavLink offset="100" href={link.href}>
                  {link.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          <div className="darkMode">Socials</div>
        </NavContainer>
      </Nav>
    </>
  )
}
