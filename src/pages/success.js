import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const SuccessPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Success!"
        keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]}
      />

      <header className="tag-page-head">
          <h1 className="page-head-title">Thank you, we'll be in touch soon!</h1>
      </header>

      <article className="post-content post-content-no-padding page-template no-image">
        <div className="post-content-body">

          <article className="post-card post-card-large post with-image">
            <Link to={`/about`} className="post-card-link">
              <Img
                fluid={data.medPic.childImageSharp.fluid}
                className="kg-image untapped-join-image"
              />
              <div className="post-card-content">
                <h2 className="post-card-title">Back</h2>
              </div>
            </Link>
          </article>
          
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

    medPic: file(relativePath: { eq: "mtg_wallpaper_success_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    benchAccounting: file(
      relativePath: { eq: "mtg_wallpaper_1.jpg" }
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
      <SuccessPage location={props.location} data={data} {...props} />
    )}
  />
)
