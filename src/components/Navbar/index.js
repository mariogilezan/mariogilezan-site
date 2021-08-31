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
          <div className="darkMode">Dark Mode</div>
        </NavContainer>
      </Nav>
    </>
  )
}
