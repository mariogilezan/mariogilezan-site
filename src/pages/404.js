import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Container } from "../styles/globalStyles"
import NotFoundIconSrc from "../images/page_not_found.svg"

const NotFoundContainer = styled(Container)`
  max-height: 20rem;
  margin-top: 3rem;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`

const NotFoundIcon = styled(NotFoundIconSrc)`
  width: 100%;
`

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
`

const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;
  transition: opacity 0.25s;
  &:hover {
    opacity: 0.7;
  }
`

export default function NotFound({ location }) {
  const title = "Page Not Found"

  return (
    <Layout location={location}>
      <Seo title={title} />
      <NotFoundContainer>
        <NotFoundIcon />
        <NotFoundMessage>
          Page not found, go back to <HomeLink to="/">Home page</HomeLink>
        </NotFoundMessage>
      </NotFoundContainer>
    </Layout>
  )
}
