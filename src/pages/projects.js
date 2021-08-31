import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Projects({ location }) {
  const title = "Projects"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <h1>Projects Page</h1>
    </Layout>
  )
}
