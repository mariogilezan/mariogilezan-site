import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Button, Container } from "../../styles/globalStyles"

export const Nav = motion(styled.nav`
  background: ${({ theme }) => theme.color.primary};
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
`)

export const NavContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
    justify-content: stretch;
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
    grid-row: 1 / 2;
    justify-self: start;
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    justify-self: center;
  }
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

export const ContactLink = styled(Button)`
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    justify-self: end;
    grid-row: 1 / 2;
  }
`
