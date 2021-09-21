import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../styles/globalStyles"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Content, Wrapper } from "./LayoutElements"

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
      delay: 0.3,
    },
  },
}

export default function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Wrapper data-is-root-path={isRootPath}>
          <Navbar isOpen={isOpen} toggle={toggle} />
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
      </>
    </ThemeProvider>
  )
}
