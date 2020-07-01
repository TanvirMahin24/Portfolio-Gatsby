import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <section className="contact-form">
          <h3>Get in Touch</h3>
          <form action="https://formspree.io/mdowlrwk" method="POST">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="form-control"
              />
              <textarea
                name="massage"
                rows="8"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </form>
        </section>
      </section>
    </Layout>
  )
}

export default contact
