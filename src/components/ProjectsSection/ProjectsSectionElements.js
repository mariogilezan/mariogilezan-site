import styled from "styled-components"
import { PageHeading } from "../../styles/globalStyles"

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 2rem;
`

export const ProjectsHeading = styled(PageHeading)``

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 0.4rem;
  position: relative;
`

export const ProjectImgContainer = styled.div`
  display: grid;
  place-content: center;
  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
  }
`

export const ProjectTitle = styled.h5``

export const ProjectDescription = styled.p``

export const ProjectLink = styled.a`
  background-color: red;
  text-decoration: none;
  display: flex;
`

export const ProjectCode = styled(ProjectLink)``

export const ProjectIconsContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
`
