import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import CloseIcon from "@material-ui/icons/Close"

const MobileMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: all 0.5s;
  background-color: ${({ theme }) => theme.color.primary};
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  display: grid;
  place-content: center;
  gap: 2rem;
`

const MobileMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
`

const MobileMenuItem = styled.li``

const MobileMenuLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  width: 100%;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.25rem;
  cursor: pointer;
`

export default function MobileMenu({ isOpen, toggle }) {
  const { menuLinks } = useSiteMetadata()
  return (
    <>
      <MobileMenuWrapper isOpen={isOpen} onClick={toggle}>
        <CloseIconWrapper onClick={toggle}>
          <CloseIcon fontSize="large" />
        </CloseIconWrapper>
        <MobileMenuList>
          {menuLinks.map(link => (
            <MobileMenuItem key={link.name}>
              <MobileMenuLink to={link.slug} activeStyle={{ color: "#00a4ea" }}>
                {link.name}
              </MobileMenuLink>
            </MobileMenuItem>
          ))}
        </MobileMenuList>
      </MobileMenuWrapper>
    </>
  )
}
