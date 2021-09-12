import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Container } from "../../styles/globalStyles"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.primary};
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
`

export const NavContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
    row-gap: 2rem;
    .darkMode {
      position: absolute;
      top: 1.1rem;
      right: 1.25rem;
    }
  }
`

export const Logo = styled(AnchorLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.2rem;
  border: 3px solid transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    ${({ theme }) => theme.color.accent},
    ${({ theme }) => theme.color.light}
  );
  &:hover {
    border-image-source: linear-gradient(
      to left,
      ${({ theme }) => theme.color.accent},
      ${({ theme }) => theme.color.light}
    );
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
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
    @media screen and (max-width: ${({ theme }) => theme.screen.xs}) {
      margin-right: 1.5rem;
    }
  }
`

export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`
