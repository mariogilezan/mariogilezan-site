import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  HeroButton,
  HeroButtonContainer,
  HeroContainer,
  HeroDetails,
  HeroHeading,
  HeroImgContainer,
} from "./HeroSectionElements"

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

export default function HeroSection({ data }) {
  const { title, heroImage } = data
  return (
    <HeroContainer variants={heroVariants} initial="hidden" animate="visible">
      <HeroDetails>
        <HeroHeading>{title}</HeroHeading>
        <HeroButtonContainer>
          <HeroButton to="/projects/" bold="true" blue="true" lg="true">
            My Projects
          </HeroButton>
          <HeroButton to="/contact/" bold="true" lg="true">
            Contact Me
          </HeroButton>
        </HeroButtonContainer>
      </HeroDetails>
      <HeroImgContainer>
        <GatsbyImage image={heroImage.asset.gatsbyImageData} alt="hero image" />
      </HeroImgContainer>
    </HeroContainer>
  )
}
