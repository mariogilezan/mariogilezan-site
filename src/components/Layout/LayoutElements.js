import styled from "styled-components"
import { motion } from "framer-motion"

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.screen.lg};
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  overflow: hidden;
`

export const Content = motion(styled.main`
  flex-grow: 1;
  padding: 2rem 0;
`)
