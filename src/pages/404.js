import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function NotFound({ location }) {
  const title = "Page Not Found"

  return (
    <Layout location={location}>
      <Seo title={title} />
      <h1>404 Not Found!</h1>
    </Layout>
  )
}
