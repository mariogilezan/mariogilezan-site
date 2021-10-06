import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ProjectsSection from "../components/ProjectsSection"

export default function Projects({ location, data }) {
  const title = "Projects"
  const { pathname } = location
  const projectData = data.allSanityProject.nodes

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <ProjectsSection data={projectData} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectData {
    allSanityProject {
      nodes {
        title
        description
        link
        githubLink
        projectImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
