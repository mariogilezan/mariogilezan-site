import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  CodeIcon,
  ProjectCard,
  ProjectCodeLink,
  ProjectIconsContainer,
  ProjectImgContainer,
  ProjectLiveLink,
  ProjectsContainer,
  ProjectsHeading,
  ProjectTitle,
  VisibilityIcon,
} from "./ProjectsSectionElements"

export default function ProjectsSection({ data }) {
  return (
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
              <ProjectLiveLink href={project.link} target="_blank">
                Live <VisibilityIcon />
              </ProjectLiveLink>
              <ProjectCodeLink href={project.githubLink} target="_blank">
                Code <CodeIcon />
              </ProjectCodeLink>
            </ProjectIconsContainer>
          </ProjectCard>
        ))}
    </ProjectsContainer>
  )
}
