import styled from "styled-components"

import { PageHeading } from "../../styles/globalStyles"
import HtmlLogoSrc from "../../assets/html_logo.svg"
import CssLogoSrc from "../../assets/css_logo.svg"
import SassLogoSrc from "../../assets/sass_logo.svg"
import JavaScriptLogoSrc from "../../assets/javascript_logo.svg"
import ReactLogoSrc from "../../assets/react_logo.svg"
import StyledCmpLogoSrc from "../../assets/styled-components_logo.svg"
import FramerLogoSrc from "../../assets/framer_logo.svg"
import GatsbyLogoSrc from "../../assets/gatsby_logo.svg"

export const AboutContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

export const AboutHeading = styled(PageHeading)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
`

export const AboutDetails = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: start;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-content: center;
  gap: 1rem;
`

export const AboutText = styled.p`
  line-height: 1.2;
  &::first-letter {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.accent};
  }
`

export const AboutImgContainer = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  width: 80%;
  justify-self: end;
  @media screen and (max-width: ${({ theme }) => theme.screen.md}) {
    width: 70%;
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`

export const AboutStacksContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const StacksHeading = styled.h4`
  color: ${({ theme }) => theme.color.accent};
  font-size: 1.2rem;
`

export const StacksList = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.8rem;
`

export const StacksItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

// Stack Logos
export const HtmlLogo = styled(HtmlLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const CssLogo = styled(CssLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const SassLogo = styled(SassLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const JavaScriptLogo = styled(JavaScriptLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const ReactLogo = styled(ReactLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const StyledCmpLogo = styled(StyledCmpLogoSrc)`
  width: 2rem;
  height: 2rem;
`
export const FramerLogo = styled(FramerLogoSrc)`
  width: 2rem;
  height: 2rem;
  fill: #fff;
`
export const GatsbyLogo = styled(GatsbyLogoSrc)`
  width: 2rem;
  height: 2rem;
`
