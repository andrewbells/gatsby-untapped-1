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
      <SEO
        title="About"
        keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about-id">
            Bringing together MTG fans working in tech
          </h2>

          <p className="top-margin">
            There are many MTG fans working at different tech companies in Helsinki, interested to play draft, sealed and constructed games, but there is never quite enough players for a proper self-organized event.
          </p>
          <p>
            <strong>The purpose</strong> of this community is to bring Helsinki-based MTG players together, enable them to play in comfort, at a reasonable time and a convenient place.
          </p>
          <p>
            The next step is to make this a monthly happening that would be hosted by a different tech company, and the venue, food, drinks and, of course, the cards would be sponsored by the host. Clearly a win-win situation!  
          </p>
          <p>
            Let’s make this happen - join the <strong>Untapped Slack</strong>:
          </p>
          <h3 id="forms">Request an invite</h3>
            <form 
              name="sign-up" 
              method="post" 
              action="/success" 
              netlify-honeypot="bot-field" 
              data-netlify="true"
            >

            <div className="hidden">
              <label>Don’t fill this out if you're human: 
                <input name="bot-field" />
              </label>
            </div>

            <input type="hidden" name="form-name" value="sign-up" />

            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Break */}
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="LinkedIn / GitHub / Twitter [link]"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Say hello (optional)"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <div className="col-12-xsmall">
                <input
                  type="checkbox"
                  id="host"
                  name="host"
                  
                />
                <label htmlFor="host">I'd like to organize an event</label>
              </div>

              <div className="col-12-xsmall">
                <input
                  type="checkbox"
                  id="tos"
                  name="tos"
                  required
                />
                <label htmlFor="tos">
                  <div>
                    Accept&nbsp;
                    <a href="/terms-of-service">Terms&nbsp;of&nbsp;Service</a>, <a href="/privacy-policy">Privacy&nbsp;Policy</a>&nbsp;and <a href="/guidelines">Community&nbsp;Guidelines</a>
                  </div>
                </label>
              </div>

              {/* Break */}
              <div className="col-12">
                <ul className="actions actions-even-padding fit">
                  <li className="actions-remove-padding">
                    <input
                      type="submit"
                      value="Sign up"
                      className="primary"
                    />
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
