import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.25rem;
  max-width: ${({ theme }) => theme.screen.md};
`

export const Content = styled.main`
  padding-top: 0;
  padding-bottom: 0;
`
