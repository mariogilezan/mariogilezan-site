import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection"

const AboutPage = ({ location, data }) => {
  const aboutData = data.allSanityAboutSection.nodes[0]

  return (
    <Layout location={location}>
      <AboutSection data={aboutData} />
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="About" pathname={location.pathname} />
)

export default AboutPage

export const query = graphql`
  query AboutData {
    allSanityAboutSection {
      nodes {
        title
        description
        hobbies
        aboutImage {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
