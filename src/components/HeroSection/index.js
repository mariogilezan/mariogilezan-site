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
      stiffness: 30,
      delay: 0.5,
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
      stiffness: 30,
      delay: 0.5,
    },
  },
}

export default function HeroSection() {
  return (
    <>
      <HeroContainer>
        <HeroDetails
          initial="hidden"
          animate="visible"
          variants={detailsVariants}
        >
          <HeroHeading>
            <TextHighlight>Hi</TextHighlight>, I&apos;m Mario.
            <br /> <TextHighlight>Front End Developer</TextHighlight> based in
            Vršac, <TextHighlight>Serbia</TextHighlight>.
          </HeroHeading>
          <HeroButtonContainer>
            <HeroButton to="/#projects" bold="true" blue="true" lg="true">
              My Projects
            </HeroButton>
            <HeroButton to="/#contact" bold="true" lg="true">
              Contact Me
            </HeroButton>
          </HeroButtonContainer>
        </HeroDetails>
        <HeroIllustrationContainer
          initial="hidden"
          animate="visible"
          variants={illustrationVariants}
        >
          <HeroIcon />
        </HeroIllustrationContainer>
      </HeroContainer>
    </>
  )
}
