import React from "react"
import {
  AboutContainer,
  AboutDetails,
  AboutHeading,
  AboutIcon,
  AboutIllustrationContainer,
  AboutText,
} from "./AboutSectionElements"

export default function AboutSection() {
  return (
    <>
      <AboutContainer id="about">
        <AboutHeading>About Me</AboutHeading>
        <AboutDetails>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ipsa sed excepturi possimus nesciunt sunt ea, perspiciatis
            accusantium odit porro alias corporis laborum, autem quaerat culpa
            eos! Numquam, obcaecati consequatur.
          </AboutText>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            ipsa sed excepturi possimus nesciunt sunt ea, perspiciatis
            accusantium odit porro alias corporis laborum, autem quaerat culpa
            eos! Numquam, obcaecati consequatur.
          </AboutText>
        </AboutDetails>
        <AboutIllustrationContainer>
          <AboutIcon />
        </AboutIllustrationContainer>
      </AboutContainer>
    </>
  )
}
