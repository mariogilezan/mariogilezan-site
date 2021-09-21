import React from "react"
import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.15);
  }
  &:active {
    transform: scale(1);
  }
`

export default function SocialLinks() {
  return (
    <>
      <SocialsWrapper>
        <SocialLink href="https://github.com/mariogilezan/" target="_blank">
          <GitHubIcon />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/mariogilezan/"
          target="_blank"
        >
          <LinkedInIcon style={{ color: "#0A66C2" }} />
        </SocialLink>
      </SocialsWrapper>
    </>
  )
}
