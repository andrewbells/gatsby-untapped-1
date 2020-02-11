import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Bringing together MTG fans working in tech
          </h2>

          <p>
            There are many MTG fans who work at different tech companies in Helsinki and are interested to play draft, sealed and constructed games, but there is never quite enough players for a proper self-organized event.
          </p>
          <p>
            The purpose of this community is to bring Helsinki-based MTG players together, enable them play in comfort, at a reasonable time and a convenient place.
          </p>
          <p>
            Next step is to make this a monthly happening that would be hosted by a different tech company, and the venue, food, drinks and, of course, the cards would be sponsored by the host. Clearly a win-win situation!
          </p>
          <p>
            Let’s make this happen! 
          </p>
          <h3 id="forms">Request an invite</h3>
            <form method="post" action="#" data-netlify="true">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  
                  placeholder="Full Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  
                  placeholder="Email"
                />
              </div>
              {/* Break */}
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-link"
                  id="demo-link"
                  placeholder="LinkedIn / GitHub / Twitter [link]"
                />
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultNotChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>

              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
