import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

export const MobileMenuWrapper = motion(styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.color.primary};
  display: grid;
  place-content: center;
  gap: 2rem;
`)

export const MobileMenuList = motion(styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
`)

export const MobileMenuItem = motion(styled.li``)

export const MobileMenuLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  width: 100%;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`

export const CloseIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 1.25rem;
  cursor: pointer;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`
