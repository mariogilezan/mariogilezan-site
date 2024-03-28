import styled from "styled-components"
import { motion } from "framer-motion"

import { Button } from "../../styles/globalStyles"

export const HeroContainer = motion(styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-content: center;
  gap: 2rem;
`)

export const HeroDetails = styled.div`
  display: grid;
  place-content: center;
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    text-align: center;
  }
`

export const HeroHeading = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 1.2;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    font-size: 2.5rem;
    padding: 0 1rem;
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

export const HeroImgContainer = styled.div`
  display: grid;
  place-content: center;
`
