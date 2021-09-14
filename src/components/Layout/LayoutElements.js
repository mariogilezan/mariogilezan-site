import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.screen.lg};
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Content = styled.main`
  flex-grow: 1;
  padding: 2rem 0;
`
