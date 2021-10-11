import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import {
  AboutContainer,
  AboutDetails,
  AboutHeading,
  AboutImgContainer,
  AboutStacksContainer,
  AboutText,
  CssLogo,
  FramerLogo,
  GatsbyLogo,
  HtmlLogo,
  JavaScriptLogo,
  ReactLogo,
  SassLogo,
  StacksHeading,
  StacksItem,
  StacksList,
  StyledCmpLogo,
} from "./AboutSectionElements"

export default function AboutSection({ data }) {
  const { title, description, hobbies, aboutImage } = data
  return (
    <>
      <AboutContainer>
        <AboutHeading>{title}</AboutHeading>
        <AboutDetails>
          <AboutText>{description}</AboutText>
          <AboutText>{hobbies}</AboutText>
        </AboutDetails>
        <AboutStacksContainer>
          <StacksHeading>Stacks that I use:</StacksHeading>
          <StacksList>
            <StacksItem>
              <HtmlLogo />
              HTML
            </StacksItem>
            <StacksItem>
              <CssLogo />
              CSS
            </StacksItem>
            <StacksItem>
              <SassLogo />
              Sass
            </StacksItem>
            <StacksItem>
              <JavaScriptLogo />
              JavaScript
            </StacksItem>
            <StacksItem>
              <ReactLogo />
              React
            </StacksItem>
            <StacksItem>
              <StyledCmpLogo />
              styled-components
            </StacksItem>
            <StacksItem>
              <FramerLogo />
              Framer
            </StacksItem>
            <StacksItem>
              <GatsbyLogo />
              GatsbyJS
            </StacksItem>
          </StacksList>
        </AboutStacksContainer>
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
