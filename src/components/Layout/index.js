import React from "react"
import { GlobalStyle } from "../../styles/globalStyles"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Content, Wrapper } from "./LayoutElements"

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper data-is-root-path={isRootPath}>
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </>
  )
}
