import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  CloseIconWrapper,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuWrapper,
} from "./MobileMenuElements"
import { itemVariants, listVariants, menuVariants } from "./animationVariants"
import { CloseMenu } from "../../styles/globalStyles"

export default function MobileMenu({ isOpen, toggle }) {
  const { menuLinks } = useSiteMetadata()
  return (
    <MobileMenuWrapper
      isOpen={isOpen}
      variants={menuVariants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <CloseIconWrapper onClick={toggle}>
        <CloseMenu />
      </CloseIconWrapper>
      <MobileMenuList variants={listVariants}>
        {menuLinks.map(link => (
          <MobileMenuItem key={link.name} variants={itemVariants}>
            <MobileMenuLink
              to={link.slug}
              activeStyle={{ color: "#00a4ea" }}
              onClick={toggle}
            >
              {link.name}
            </MobileMenuLink>
          </MobileMenuItem>
        ))}
      </MobileMenuList>
    </MobileMenuWrapper>
  )
}
