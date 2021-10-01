import styled from "styled-components"
import AboutIconSrc from "../../assets/developer_activity.svg"

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

export const AboutHeading = styled.h1`
  margin: 0;
  grid-column: 1 / -1;
`

export const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-content: center;
  gap: 1rem;
`

export const AboutText = styled.p`
  line-height: 1.2;
  &::first-letter {
    color: ${({ theme }) => theme.color.accent};
    font-size: 1.6rem;
  }
`

export const AboutIllustrationContainer = styled.div`
  display: grid;
  place-content: center;
`

export const AboutIcon = styled(AboutIconSrc)`
  max-width: 14rem;
  max-height: 14rem;
`
