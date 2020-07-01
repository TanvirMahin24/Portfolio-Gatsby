import React from "react"

import Image from "gatsby-image"
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa"
const Project = ({
  description,
  title,
  github,
  youtube,
  stack,
  url,
  image,
  index,
}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">
          {index < 10 ? `0${index + 1}` : index + 1}
        </span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github}>
              <FaGithub className="project-icon" />
            </a>
          )}
          {youtube && (
            <a href={youtube}>
              <FaYoutube className="project-icon" />
            </a>
          )}
          {url && (
            <a href={url}>
              <FaGlobe className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Project
