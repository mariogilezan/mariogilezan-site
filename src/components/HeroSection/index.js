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

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0,
      duration: 1.25,
      delay: 0.25,
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <HeroContainer variants={heroVariants} initial="hidden" animate="visible">
        <HeroDetails>
          <HeroHeading>
            <TextHighlight>Hi</TextHighlight>, I&apos;m Mario.
            <br /> <TextHighlight>Front End Developer</TextHighlight> based in
            Vršac, <TextHighlight>Serbia</TextHighlight>.
          </HeroHeading>
          <HeroButtonContainer>
            <HeroButton to="/projects" bold="true" blue="true" lg="true">
              My Projects
            </HeroButton>
            <HeroButton to="/contact" bold="true" lg="true">
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
