import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  AboutContainer,
  AboutDetails,
  AboutHeading,
  AboutImgContainer,
  AboutText,
} from "./AboutSectionElements"

export default function AboutSection({ data }) {
  const { title, description, hobbies, stacks, aboutImage } = data
  return (
    <>
      <AboutContainer>
        <AboutHeading>{title}</AboutHeading>
        <AboutDetails>
          <AboutText>{description}</AboutText>
          <AboutText>{hobbies}</AboutText>
        </AboutDetails>
        <AboutImgContainer>
          <GatsbyImage
            image={aboutImage.asset.gatsbyImageData}
            alt="about image"
          />
        </AboutImgContainer>
      </AboutContainer>
    </>
  )
}
