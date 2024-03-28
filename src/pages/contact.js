import React from "react"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Form from "../components/Form"

const ContactPage = ({ location }) => {
  console.log(location)
  return (
    <Layout location={location}>
      <Form />
    </Layout>
  )
}

export const Head = ({ location }) => (
  <Seo title="Contact" pathname={location.pathname} />
)

export default ContactPage
