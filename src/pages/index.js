import React from "react"
import { graphql } from "gatsby"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Home({ location, data }) {
  const title = "Home"
  const { pathname } = location
  const heroData = data.allSanityHeroSection.nodes[0]
  const image = data.allSanityAboutSection.nodes[0].aboutImage.asset.url

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} image={image} />
      <HeroSection data={heroData} />
    </Layout>
  )
}

export const query = graphql`
  query HomeData {
    allSanityHeroSection {
      nodes {
        title
        heroImage {
          asset {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 280
              width: 280
              placeholder: BLURRED
            )
          }
        }
      }
    }
    allSanityAboutSection {
      nodes {
        aboutImage {
          asset {
            url
          }
        }
      }
    }
  }
`
