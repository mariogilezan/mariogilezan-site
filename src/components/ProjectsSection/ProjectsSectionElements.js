import styled from "styled-components"

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 2rem;
`

export const ProjectsHeading = styled.h1`
  margin: 0;
  grid-column: 1 / -1;
`

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 0.4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3rem;
  justify-items: center;
`

export const ProjectImgContainer = styled.div`
  border-radius: 0.4rem;
  img {
    border-radius: 0.4rem 0.4rem 0 0;
  }
`

export const ProjectLink = styled.a`
  background-color: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  padding: 0.1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-self: center;
  transition: background-color 0.25s;
  &:hover {
    background-color: ${({ theme }) => theme.color.light + "99"};
  }
`

export const ProjectCode = styled(ProjectLink)``

export const ProjectIconsContainer = styled.div`
  display: flex;
  gap: 2rem;
`
