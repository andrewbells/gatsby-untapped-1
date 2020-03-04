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
        title="Community Guidelines"
        keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="guidelines-id">
            Community Guidelines
          </h2>

          <h6 className="top-margin-h6">
            Untapped Grounds is a community of Magic: the Gathering fans working in the IT industry.
          </h6>
          <p>
            Our guidelines are meant to build a mutual understanding of what being a part of this community is all about. We will take action if any of these guidelines are not upheld, so please read carefully.
          </p>
          <h6>
            Always be Respectful
          </h6>
          <p>
            We come together from various backgrounds with the same goal in mind - to have a good game. Curiosity, questioning, and cultural understanding are something we celebrate. Be respectful of others and where they’re coming from.
          </p>
          <h6>
            Help and support across all skill levels
          </h6>
          <p>
            If someone has a question you think has an obvious answer, kindly and calmly help them out. Heckling and being straight up mean doesn’t help anyone.
          </p>
          <h6>
            Think before you share
          </h6>
          <p>
            We care about your safety. Please beware of swapping or posting any private information that could be misused. That includes your phone number, age, address, what time you’ll be at home, school name, email, or other personal information that could put your privacy at risk. Simply put: don’t over-share. Sharing and encouraging others to share personal data might get your post, and possibly your account, removed.
          </p>
          <h6>
            Play fair
          </h6>
          <p>
            We are all here to have a good game and have fun, let's play fair!
          </p>
          <h4>
            PLEASE DO NOT USE UNTAPPED TO:
          </h4>
          <h6>
            Attack a person or group of people with words and actions
          </h6>
          <p>
            Untapped is a safe place for players of all backgrounds. Harassment and hurtful content will not be tolerated. Using symbols, names and text that promote hate - as well as harassing, stalking, impersonating, and making sexual remarks towards someone - are considered abuse. The same goes for nudity and disturbing profile pictures and usernames. Untapped reserves the right to replace images or remove these accounts at its sole discretion. Rule of thumb: if you are making someone feel attacked or hurt, then you shouldn’t be doing it. We take these reports seriously and may delete your account without previous notice if such activity is verified by our team.
          </p>
          <h6>
            Spam the forum or other communication channels
          </h6>
          <p>
            Leaving a trail of irrelevant, abusive, illegal, or nonsensical entries in forums or anywhere on Untapped may get your account deleted. This includes not only creating posts without substance, but any type of spamming.
          </p>
          <p>
            It's okay to share external resources and links. But just like with copyrighted and pirated materials, you should know that spamming, referral code hocking, advertising, and excessively promoting products/services is not acceptable and such posts and references can be removed without warning.
          </p>
          <h6>
            Write inflammatory comments
          </h6>
          <p>
            Hateful, obscene and off-topic comments don’t contribute to the community and having a good game. Cursing doesn’t either.
          </p>
          <h6>
            To Summarize
          </h6>
          <p>
            We do not tolerate content that is:
          </p>
            <ul>
              <li>  
                Illegal
              </li>
              <li>
                Pornographic
              </li>
              <li>
                Excessively profane or violent
              </li>
              <li>
                Spam
              </li>
              <li>
                Threatening, harassing, or bullying
              </li>
              <li>
                Associated with racism or intolerance
              </li>
              <li>
                Impersonating someone in a misleading or deceptive manner
              </li>
              <li>
                Personal confidential information
              </li>
            </ul>
          <p>
            Please don't waste your time looking for loopholes; we will remove any content that violates the spirit of these guidelines and you will risk losing partial or full access to Untapped without warning. By following these guidelines, we will all contribute to an interesting and helpful community.
          </p>

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
