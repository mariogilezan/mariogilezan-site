import styled, { css } from "styled-components"

import GithubIconSrc from "../../assets/icons/github-icon.svg"
import LinkedinIconSrc from "../../assets/icons/linkedin-icon.svg"

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const SocialLink = styled.a`
  display: flex;
  background-color: ${({ linkedin, theme }) =>
    linkedin ? theme.color.light : theme.color.primary};
  text-decoration: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.25s;
  &:hover {
    box-shadow: 0 0 0.3rem 0.15rem ${({ theme }) => theme.color.light};
  }
  &:active {
    box-shadow: none;
  }
`

const iconStyles = css`
  max-width: 1.75rem;
  max-height: 1.75rem;
`

export const GithubIcon = styled(GithubIconSrc)`
  ${iconStyles}
`

export const LinkedinIcon = styled(LinkedinIconSrc)`
  ${iconStyles}
`
