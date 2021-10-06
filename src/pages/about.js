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
        stacks
        aboutImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 240
              height: 240
            )
          }
        }
      }
    }
  }
`
