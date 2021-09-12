import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

export const theme = {
  color: {
    primary: "#1E282D",
    light: "#FFF",
    accent: "#00A4EA",
  },
  screen: {
    xs: "22.5rem",
    s: "28rem",
    sm: "37.5rem",
    md: "50rem",
    lg: "62rem",
  },
  padding: {
    sm: "0.4rem 1.2rem",
    lg: "0.8rem 1.6rem",
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

export const TextHighlight = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

export const Button = styled(Link)`
  text-decoration: none;
  display: inline-block;
  border-radius: 0.4rem;
  padding: ${({ theme, lg }) => (lg ? theme.padding.lg : theme.padding.sm)};
  background-color: ${({ blue, theme }) =>
    blue ? theme.color.accent : theme.color.light};
  color: ${({ blue, theme }) =>
    blue ? theme.color.light : theme.color.primary};
  font-weight: ${({ bold }) => bold && "bold"};
  transition: opacity 0.25s, transform 0.25s;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    transform: scale(0.95);
  }
`
