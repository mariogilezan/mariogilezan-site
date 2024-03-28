import React from "react"

import { TextHighlight } from "../../styles/globalStyles"
import { FooterText, FooterWrapper } from "./FooterElements"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterText>
        &copy; {currentYear} <TextHighlight>M</TextHighlight>ario{" "}
        <TextHighlight>G</TextHighlight>ilezan. All Rights Reserved.
      </FooterText>
    </FooterWrapper>
  )
}
