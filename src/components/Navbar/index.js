import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  ContactLink,
  Logo,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavList,
} from "./NavbarElements"
import { TextHighlight } from "../../styles/globalStyles"

const navbarVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
}

export default function Navbar() {
  const { menuLinks } = useSiteMetadata()
  return (
    <>
      <Nav variants={navbarVariants} initial="hidden" animate="visible">
        <NavContainer>
          <Logo to="/">
            <TextHighlight>M</TextHighlight>G
          </Logo>
          <NavList>
            {menuLinks.map(link => (
              <NavItem key={link.name}>
                <NavLink to={link.slug} name={link.name}>
                  {link.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          <ContactLink to="/contact" blue="true">
            Contact
          </ContactLink>
        </NavContainer>
      </Nav>
    </>
  )
}
