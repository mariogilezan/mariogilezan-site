import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import MailSentIconSrc from "../assets/mail_sent.svg"

const ThanksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`

const ThanksHeading = styled.h1`
  margin: 0;
`

const MailSentIcon = styled(MailSentIconSrc)`
  max-width: 18rem;
  max-height: 18rem;
`

const ThanksText = styled.p``

const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.color.accent};
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent + "90"};
  }
`

const ThanksPage = ({ location }) => {
  return (
    <Layout location={location}>
      <ThanksWrapper>
        <ThanksHeading>Message Sent!</ThanksHeading>
        <MailSentIcon />
        <ThanksText>
          Thanks for reaching out! Go back to: <HomeLink to="/">Home</HomeLink>
        </ThanksText>
      </ThanksWrapper>
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="Thanks" pathname={location.pathname} />
)

export default ThanksPage
