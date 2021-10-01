import React from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Contact({ location }) {
  const title = "Contact"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <Form />
    </Layout>
  )
}
