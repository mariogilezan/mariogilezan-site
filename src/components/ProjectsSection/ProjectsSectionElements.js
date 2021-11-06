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
  position: relative;
  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    border-radius: 0.4rem;
  }
`

export const ProjectTitle = styled.h4`
  font-size: 1.1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: ${({ theme }) => theme.color.primaryLighter};
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 4;
`

export const ProjectLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.25s;
  color: ${({ theme }) => theme.color.light};
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`

export const ProjectCode = styled(ProjectLink)``

export const ProjectIconsContainer = styled.div`
  padding: 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`
