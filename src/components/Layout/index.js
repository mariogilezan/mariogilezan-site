import React from "react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle, theme } from "../../styles/globalStyles"
import { Content, Wrapper } from "./LayoutElements"
import Footer from "../Footer"
import Navbar from "../Navbar"

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      delay: 0.2,
    },
  },
}

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Wrapper data-is-root-path={isRootPath}>
        <Navbar />
        <Content
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}
