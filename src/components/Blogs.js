import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section blogs">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog, index) => (
          <Blog key={blog.id} index={index} {...blog} />
        ))}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          All Blogs
        </Link>
      )}
    </section>
  )
}
export default Blogs
