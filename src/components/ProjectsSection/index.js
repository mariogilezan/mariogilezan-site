import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import CodeIcon from "@material-ui/icons/Code"
import VisibilityIcon from "@material-ui/icons/Visibility"
import {
  ProjectCard,
  ProjectDescription,
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
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectIconsContainer>
                <ProjectLink href={project.link} target="_blank">
                  <VisibilityIcon />
                </ProjectLink>
                <ProjectLink href={project.githubLink} target="_blank">
                  <CodeIcon />
                </ProjectLink>
              </ProjectIconsContainer>
            </ProjectCard>
          ))}
      </ProjectsContainer>
    </>
  )
}
