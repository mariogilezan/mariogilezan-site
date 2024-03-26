import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  ProjectCard,
  ProjectIconsContainer,
  ProjectImgContainer,
  ProjectLink,
  ProjectsContainer,
  ProjectsHeading,
  ProjectTitle,
} from "./ProjectsSectionElements"

export default function ProjectsSection({ data }) {
  return (
    <>
      <ProjectsContainer>
        <ProjectsHeading>Projects</ProjectsHeading>
        {data &&
          data.map(project => (
            <ProjectCard key={project.title}>
              <ProjectImgContainer>
                <GatsbyImage
                  image={project.projectImage.asset.gatsbyImageData}
                  alt={project.title}
                />
              </ProjectImgContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectIconsContainer>
                <ProjectLink href={project.link} target="_blank">
                  Live <span>live icon</span>
                </ProjectLink>
                <ProjectLink href={project.githubLink} target="_blank">
                  Code <span>code icon</span>
                </ProjectLink>
              </ProjectIconsContainer>
            </ProjectCard>
          ))}
      </ProjectsContainer>
    </>
  )
}
