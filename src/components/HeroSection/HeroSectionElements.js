import styled from "styled-components"
import HeroIconSrc from "../../images/code_thinking.svg"
import { Button } from "../../styles/globalStyles"

export const HeroContainer = styled.section`
  margin-top: 6rem;
  width: 100%;
  height: 90%;
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-height: ${({ theme }) => theme.screen.s}) {
    margin-top: 2rem;
  }
`

export const HeroDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    gap: 1rem;
  }
`

export const HeroHeading = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 1.2;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.xs}) {
    font-size: 2rem;
  }
`

export const HeroButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0 2rem;
  }
`

export const HeroButton = styled(Button)``

export const HeroIllustrationContainer = styled.div`
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    width: 100%;
  }
`

export const HeroIcon = styled(HeroIconSrc)`
  width: 100%;
`
