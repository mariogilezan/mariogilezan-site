import styled, { createGlobalStyle } from "styled-components"

export const theme = {
  color: {
    primary: "#1E282D",
    light: "#FFF",
    accent: "#00A4EA",
  },
  screen: {
    xs: "22.5rem",
    sm: "37.5rem",
    md: "62rem",
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
  max-width: ${({ theme }) => theme.screen.md};
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
`

export const TextHighlight = styled.span`
  color: ${({ theme }) => theme.color.accent};
`
