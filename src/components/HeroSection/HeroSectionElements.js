import styled from "styled-components"
import { motion } from "framer-motion"
import HeroIconSrc from "../../assets/code_thinking.svg"
import { Button } from "../../styles/globalStyles"

export const HeroContainer = styled.section`
  margin: 4rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  place-content: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    margin: 2rem 0;
  }
  @media screen and (max-height: ${({ theme }) => theme.screen.s}) {
    margin: 2rem 0;
  }
`

export const HeroDetails = motion(styled.div`
  display: grid;
  place-content: center;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    text-align: center;
  }
`)

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
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    justify-content: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    margin: 0 auto;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
  }
`

export const HeroButton = styled(Button)``

export const HeroIllustrationContainer = motion(styled.div`
  display: grid;
  place-content: center;
`)

export const HeroIcon = styled(HeroIconSrc)`
  max-width: 18rem;
  max-height: 18rem;
`
