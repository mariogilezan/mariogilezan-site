import styled from "styled-components"
import { PageHeading } from "../../styles/globalStyles"

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
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

export const PorjectDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(30, 40, 45, 0.5),
    rgba(30, 40, 45, 1)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  z-index: 10;
  border-radius: 0.4rem;
`

export const ProjectTitle = styled.h4`
  align-self: start;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.color.primary};
`

export const ProjectDescription = styled.p`
  padding: 0.5rem;
  font-size: 0.95rem;
  background-color: ${({ theme }) => theme.color.primary};
`

export const ProjectLink = styled.a`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.color.primary};
`

export const ProjectCode = styled(ProjectLink)``

export const ProjectIconsContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`
