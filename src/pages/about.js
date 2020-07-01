import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, stack, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <section className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          title
          id
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
