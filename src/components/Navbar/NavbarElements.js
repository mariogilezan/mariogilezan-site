import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.color.primary};
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  transition: all 0.25s;
  &:hover {
    box-shadow: 0 0 0.5rem 0.25rem ${({ theme }) => theme.color.accent + "75"};
    transform: scale(1.05);
  }
  &:active {
    box-shadow: none;
    transform: scale(0.95);
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
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

export const NavLink = styled(Link)`
  text-decoration: none;
  transition:
    color 0.25s,
    text-shadow 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
    text-shadow: 0 0 0.5rem ${({ theme }) => theme.color.accent};
  }
`

export const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;
  & > svg g {
    transition: fill 0.1s;
  }
  &:hover {
    svg g {
      fill: ${({ theme }) => theme.color.accent};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    display: flex;
  }
`
