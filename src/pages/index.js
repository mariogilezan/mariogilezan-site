import React from "react"
import HeroSection from "../components/HeroSection"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Home({ location }) {
  const title = "Home"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <HeroSection />
    </Layout>
  )
}
