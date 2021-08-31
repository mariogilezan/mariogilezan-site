import React from "react"
import { FooterText, FooterWrapper } from "./FooterElements"
import { TextHighlight } from "../../styles/globalStyles"

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterText>
          &copy; 2021 <TextHighlight>M</TextHighlight>ario{" "}
          <TextHighlight>G</TextHighlight>ilezan. All Rights Reserved.
        </FooterText>
      </FooterWrapper>
    </>
  )
}
