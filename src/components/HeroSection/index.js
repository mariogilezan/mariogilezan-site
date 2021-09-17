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

const detailsVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1.25,
      delay: 0.25,
    },
  },
}

const illustrationVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
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
      <HeroContainer>
        <HeroDetails
          variants={detailsVariants}
          initial="hidden"
          animate="visible"
        >
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
        <HeroIllustrationContainer
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroIcon />
        </HeroIllustrationContainer>
      </HeroContainer>
    </>
  )
}
