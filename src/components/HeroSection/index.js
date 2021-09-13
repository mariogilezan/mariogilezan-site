import React from "react"
import {
  HeroButton,
  HeroButtonContainer,
  HeroContainer,
  HeroDetails,
  HeroHeading,
  HeroIcon,
  HeroIllustrationContainer,
} from "./HeroSectionElements"
import { TextHighlight } from "../../styles/globalStyles"

export default function HeroSection() {
  return (
    <>
      <HeroContainer>
        <HeroDetails>
          <HeroHeading>
            <TextHighlight>Hi</TextHighlight>, I&apos;m Mario.
            <br /> <TextHighlight>Front End Developer</TextHighlight> based in
            Vršac, <TextHighlight>Serbia</TextHighlight>.
          </HeroHeading>
          <HeroButtonContainer>
            <HeroButton to="/#projects" blue="true" bold="true" lg="true">
              My Projects
            </HeroButton>
            <HeroButton to="/#contact" bold="true" lg="true">
              Contact Me
            </HeroButton>
          </HeroButtonContainer>
        </HeroDetails>
        <HeroIllustrationContainer>
          <HeroIcon />
        </HeroIllustrationContainer>
      </HeroContainer>
    </>
  )
}
