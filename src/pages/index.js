import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home({ location }) {
  const title = "Home"
  const { pathname } = location

  return (
    <Layout location={location}>
      <Seo title={title} pathname={pathname} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
