import styled from "styled-components"
import AboutIconSrc from "../../assets/developer_activity.svg"

export const AboutContainer = styled.section`
  padding-top: 2rem;
  margin: 4rem 0;
  width: 100%;
  display: flex;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-height: ${({ theme }) => theme.screen.s}) {
    margin: 2rem 0;
  }
`

export const AboutDetails = styled.div`
  order: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-content: center;
  gap: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    order: 1;
  }
`

export const AboutText = styled.p`
  line-height: 1.2;
  &::first-letter {
    color: ${({ theme }) => theme.color.accent};
    font-size: 1.6rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    text-align: center;
  }
`

export const AboutIllustrationContainer = styled.div`
  order: 1;
  display: grid;
  place-content: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    order: 2;
  }
`

export const AboutIcon = styled(AboutIconSrc)`
  max-width: 14rem;
  max-height: 14rem;
`
