import { Link } from "gatsby"
import styled, { createGlobalStyle, css } from "styled-components"
import HamburgerSrc from "../assets/icons/hamburger.svg"
import CloseSrc from "../assets/icons/close.svg"

export const theme = {
  color: {
    primary: "#1e282d",
    primaryLighter: "#2b383e",
    light: "#ffffff",
    accent: "#00a4ea",
  },
  screen: {
    xs: "22.5rem",
    s: "28rem",
    sm: "37.5rem",
    md: "50rem",
    lg: "62rem",
  },
  padding: {
    sm: "0.3rem 1rem",
    lg: "0.7rem 1.4rem",
  },
}

export const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    font-family: "Open Sans", sans-serif;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.light};
  }
  a {
    color: ${({ theme }) => theme.color.light};
  }
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.screen.lg};
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
`

export const PageHeading = styled.h1`
  position: relative;
  margin: 0;
  padding-bottom: 0.3rem;
  grid-column: 1 / -1;
  &:after {
    content: "";
    width: 2rem;
    height: 0.2rem;
    background-image: ${({ theme }) =>
      `linear-gradient(to right, ${theme.color.accent}, ${theme.color.light})`};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const TextHighlight = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

export const Button = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  border: ${({ lg }) => (lg ? "3px" : "2px")} solid
    ${({ theme, blue }) => (blue ? theme.color.accent : theme.color.light)};
  padding: ${({ theme, lg }) => (lg ? theme.padding.lg : theme.padding.sm)};
  color: ${({ blue, theme }) =>
    blue ? theme.color.accent : theme.color.light};
  font-weight: ${({ bold }) => bold && "bold"};
  transition:
    box-shadow 0.25s,
    transform 0.25s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.5rem 0.25rem
      ${({ blue, theme }) =>
        blue ? theme.color.accent + "80" : theme.color.light + "80"};
  }
  &:active {
    box-shadow: none;
    transform: scale(1);
  }
`

// Mobile Navigation Icons
const iconStyles = css`
  width: 1.75rem;
  height: 1.75rem;
`

export const HamburgerMenu = styled(HamburgerSrc)`
  ${iconStyles}
`

export const CloseMenu = styled(CloseSrc)`
  ${iconStyles}
`
