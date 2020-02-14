import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />

        <header className="tag-page-head">
          <h1 className="page-head-title">404: Something is wrong!</h1>
        </header>

        <article className="post-content post-content-no-padding page-template no-image">
          <div className="post-content-body">
            <p className="centered-text">
              You just hit a route that doesn&#39;t exist... pull back!
            </p>

          <figure className="post-card post-card-large with-image kg-image-card kg-width-full">
            <Link to={`/`} className="post-card-link">
              <Img
                fluid={data.largePic.childImageSharp.fluid}
                className="kg-image"
              />
              <div className="post-card-content">
                <h2 className="post-card-title">Back</h2>
              </div>
            </Link>
            </figure>

        </div>
      </article>

      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    largePic: file(
      relativePath: { eq: "mtg_wallpaper_success_1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
