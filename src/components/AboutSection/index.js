import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  AboutContainer,
  AboutDetails,
  AboutHeading,
  AboutImgContainer,
  AboutStacksContainer,
  AboutText,
  StacksHeading,
  StacksItem,
  StacksList,
} from "./AboutSectionElements"
import { stacks } from "./stacks"

export default function AboutSection({ data }) {
  const { title, description, hobbies, aboutImage } = data
  return (
    <AboutContainer>
      <AboutHeading>{title}</AboutHeading>
      <AboutDetails>
        <AboutText>{description}</AboutText>
        <AboutText>{hobbies}</AboutText>
      </AboutDetails>
      <AboutStacksContainer>
        <StacksHeading>Stacks that I use:</StacksHeading>
        <StacksList>
          {stacks.map(stack => (
            <StacksItem key={stack.name}>
              {stack.logo}
              {stack.name}
            </StacksItem>
          ))}
        </StacksList>
      </AboutStacksContainer>
      <AboutImgContainer>
        <GatsbyImage
          image={aboutImage.asset.gatsbyImageData}
          alt="about image"
        />
      </AboutImgContainer>
    </AboutContainer>
  )
}
