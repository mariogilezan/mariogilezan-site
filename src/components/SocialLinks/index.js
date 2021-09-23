import React from "react"
import styled from "styled-components"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const SocialLink = styled.a`
  display: flex;
  background-color: ${({ linkedin, theme }) =>
    linkedin ? theme.color.light : theme.color.primary};
  text-decoration: none;
  border-radius: 50%;
  padding: ${({ linkedin }) => linkedin && "0.1rem"};
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

export default function SocialLinks() {
  return (
    <>
      <SocialsWrapper>
        <SocialLink href="https://github.com/mariogilezan/" target="_blank">
          <GitHubIcon style={{ fontSize: 28 }} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/mariogilezan/"
          target="_blank"
          linkedin="true"
        >
          <LinkedInIcon style={{ color: "#0A66C2", fontSize: 28 }} />
        </SocialLink>
      </SocialsWrapper>
    </>
  )
}
