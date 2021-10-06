import styled from "styled-components"
import { PageHeading } from "../../styles/globalStyles"

export const AboutContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

export const AboutHeading = styled(PageHeading)``

export const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-content: center;
  gap: 1rem;
`

export const AboutText = styled.p`
  line-height: 1.2;
  &::first-letter {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.accent};
  }
`

export const AboutImgContainer = styled.div`
  display: grid;
  place-content: center;
`
