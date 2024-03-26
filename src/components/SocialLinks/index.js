import React from "react"
import {
  GithubIcon,
  LinkedinIcon,
  SocialLink,
  SocialsWrapper,
} from "./SocialLinksElements"

export default function SocialLinks() {
  return (
    <SocialsWrapper>
      <SocialLink href="https://github.com/mariogilezan/" target="_blank">
        <GithubIcon />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/mariogilezan/"
        target="_blank"
        linkedin="true"
      >
        <LinkedinIcon />
      </SocialLink>
    </SocialsWrapper>
  )
}
