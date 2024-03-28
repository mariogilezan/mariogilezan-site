import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"

const IndexPage = ({ location, data }) => {
  const heroData = data.allSanityHeroSection.nodes[0]

  return (
    <Layout location={location}>
      <HeroSection data={heroData} />
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="Home" pathname={location.pathname} />
)

export default IndexPage

export const query = graphql`
  query HomeData {
    allSanityHeroSection {
      nodes {
        title
        heroImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 280
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
