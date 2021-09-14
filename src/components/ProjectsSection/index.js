import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import CodeIcon from "@material-ui/icons/Code"
import VisibilityIcon from "@material-ui/icons/Visibility"
import {
  ProjectCard,
  ProjectIconsContainer,
  ProjectImgContainer,
  ProjectsContainer,
} from "./ProjectsSectionElements"

export default function ProjectsSection() {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
          name
        }
      }
    }
  `)

  return (
    <>
      <ProjectsContainer id="projects">
        {allFile &&
          allFile.nodes.map(
            file =>
              file.name !== "page-icon" && (
                <ProjectCard key={file.name}>
                  <ProjectImgContainer>
                    <GatsbyImage
                      image={file.childImageSharp.gatsbyImageData}
                      alt={file.name}
                    />
                  </ProjectImgContainer>
                  <ProjectIconsContainer>
                    <VisibilityIcon />
                    <CodeIcon />
                  </ProjectIconsContainer>
                </ProjectCard>
              )
          )}
      </ProjectsContainer>
    </>
  )
}
