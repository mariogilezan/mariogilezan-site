import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ProjectsSection from "../components/ProjectsSection"

const ProjectsPage = ({ location, data }) => {
  const projectData = data.allSanityProject.nodes
  console.log(projectData)

  return (
    <Layout location={location}>
      <ProjectsSection data={projectData} />
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="Projects" pathname={location.pathname} />
)

export default ProjectsPage

export const query = graphql`
  query ProjectData {
    allSanityProject(sort: { _createdAt: ASC }) {
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
