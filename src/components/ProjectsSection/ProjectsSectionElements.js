import styled, { css } from "styled-components"

import { PageHeading } from "../../styles/globalStyles"
import VisibilityIconSrc from "../../assets/icons/visibility.svg"
import CodeIconSrc from "../../assets/icons/code.svg"

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
`

export const ProjectsHeading = styled(PageHeading)`
  grid-column: 1 / -1;
`

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.color.primaryLighter};
  border-radius: 0.4rem;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 3.75rem;
`

export const ProjectImgContainer = styled.div`
  position: relative;
  border-radius: 0.4rem;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.4rem 0.4rem 0 0;
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
    border-radius: 0.4rem 0.4rem 0 0;
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

export const ProjectIconsContainer = styled.div`
  padding: 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const iconLinkStyles = css`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
    svg {
      fill: ${({ theme }) => theme.color.accent};
    }
  }
`

export const ProjectLiveLink = styled.a`
  ${iconLinkStyles}
`

export const ProjectCodeLink = styled.a`
  ${iconLinkStyles}
`

// Icons
const iconStyles = css`
  max-width: 1.5rem;
  max-height: 1.5rem;
  transition: fill 0.25s;
`

export const VisibilityIcon = styled(VisibilityIconSrc)`
  ${iconStyles}
`

export const CodeIcon = styled(CodeIconSrc)`
  ${iconStyles}
`
