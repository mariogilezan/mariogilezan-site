import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../../styles/globalStyles"

export const Nav = styled.nav`
  padding: 1.2rem 0;
`

export const NavContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 2rem;
    .darkMode {
      position: absolute;
      top: 1.1rem;
      right: 1.25rem;
    }
  }
`

export const Logo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
  border: 3px solid transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #00a4ea, #fff);
  &:hover {
    border-image-source: linear-gradient(to left, #00a4ea, #fff);
  }
  @media screen and (max-width: 600px) {
    align-self: flex-start;
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 2rem;
    @media screen and (max-width: 360px) {
      margin-right: 1.5rem;
    }
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  transition: color 0.25s;
  &:hover {
    color: #00a4ea;
  }
`
