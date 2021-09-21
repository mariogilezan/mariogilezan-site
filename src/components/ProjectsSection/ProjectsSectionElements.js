import styled from "styled-components"
import { PageHeading } from "../../styles/globalStyles"

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`

export const ProjectsHeading = styled(PageHeading)`
  grid-column: 1 / -1;
`

export const ProjectCard = styled.div`
  background-color: red;
`

export const ProjectImgContainer = styled.div`
  width: 100%;
`

export const ProjectIconsContainer = styled.div``
