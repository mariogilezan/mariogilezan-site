import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function About({ location }) {
  const title = "About"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      About Page
    </Layout>
  )
}
