import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"

const Jobs = () => {
  const query = graphql`
    {
      __typename
      allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
        nodes {
          position
          company
          date
          strapiId
          desc {
            id
            name
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, date, position, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.strapiId}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(d => (
            <div key={d.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <span>{d.name}</span>
            </div>
          ))}
          <Link to="/about" className="btn center-btn">
            More Info
          </Link>
        </article>
      </div>
    </section>
  )
}

export default Jobs
