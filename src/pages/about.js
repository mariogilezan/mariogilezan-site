import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import AboutSection from "../components/AboutSection"

export default function About({ location, data }) {
  const title = "About"
  const { pathname } = location
  const aboutData = data.allSanityAboutSection.nodes[0]

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <AboutSection data={aboutData} />
    </Layout>
  )
}

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
