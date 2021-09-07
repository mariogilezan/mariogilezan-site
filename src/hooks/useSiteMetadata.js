import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
            menuLinks {
              name
              href
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
