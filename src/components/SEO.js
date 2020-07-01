import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDescription,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title ? `${title} |` : ""} ${siteTitle}`}
    >
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      <meta
        name="keywords"
        content="Tanvir Mahin, Tanvir, mahin, tm24, tanvirmahin, tanvir mahin 24, tanvirmahin24"
      />
      <link rel="icon" type="image/png" href="./favicon.png"></link>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
