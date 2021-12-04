// Custom typeface
import "@fontsource/open-sans"
// Normalize CSS across browsers
import "./src/styles/normalize.css"

import React from "react"
import { AnimatePresence } from "framer-motion"

// Page transition animation
export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)

// Live chat widget
export const onInitialClientRender = () => {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date()
  ;(function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/61ab656fc82c976b71bf9fdc/1fm2o8fmt"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0.parentNode.insertBefore(s1, s0)
  })()
}
