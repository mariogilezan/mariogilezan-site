// Custom typeface
import "@fontsource/open-sans"
// Normalize CSS across browsers
import "./src/styles/normalize.css"

import React from "react"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
