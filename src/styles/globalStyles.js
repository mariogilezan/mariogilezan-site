import styled, { createGlobalStyle } from "styled-components"

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
    background: #1E282D;
    color: #FFF;
  }
  a {
    color: #FFF;
  }
`

export const Container = styled.div`
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.25rem;
`

export const TextHighlight = styled.span`
  color: #00a4ea;
`
