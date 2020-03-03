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
        title="Privacy Policy"
        keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="privacy-id">
            Privacy Policy
          </h2>

          <p className="top-margin">
            Effective as of March 1st 2020, last edited March 1st 2020
          </p>
          <p>      
            This Privacy Policy describes what personal data we collect about you and how we use it, as well as the choices you have about your personal data.
            This Privacy Policy applies to all Untapped services (such as our Slack community Untapped Grounds), websites like <a href="/">www.untappd.club</a> and related services, which we control and collectively here call the Service. We may update this Privacy Policy from time to time by posting a new version of the Privacy Policy on <a href="/privacy-policy">untappd.club/privacy-policy</a>. If the changes we make are material, we will notify you through our Service or by e-mail before they become effective. Your use of the Service after the effective date is subject to the new Privacy Policy.
          </p>
          <h4>  
            CONTACT US
          </h4>
          <p>
            If you have any questions about this Privacy Policy or your rights related to your privacy when using the Service, please contact us at andrew@roborob.io.
          </p>
          <h4>
            AGE LIMITS
          </h4>
          <p>
            We do not knowingly collect or solicit personal data from anyone under the age of 13 or knowingly allow such persons to use our Service. If you are under 13, please do not attempt to access our Services, take them into use, or send us any information about yourself. If you believe that we might have received any information from or about a child under the age of 13, please contact us at andrew@roborob.io.
          </p>
          <h4>
            WHAT DATA WE COLLECT AND WHY
          </h4>
          <p>
            We do not collect any personal information unless we need it for a specific reason. Here we have listed the data we collect for your reference.
          </p>
          <h6>
            DATA YOU GIVE US:
          </h6>
          <p>
            Untapped Grounds is an invite-only community and to make sure we get the right people in, when you sign up for the Service, we ask for your first and last names, a proof that you belong to the IT industry (e.g. a link to your LinkedIn or GitHub profile, personal website, etc) and an e-mail address. We need this data to identify you and to operate and provide the Service for you, and also to send you important messages about your account and the Service. We also use your e-mail address to send you also other kinds of messages, like reports, surveys and offers that you are free to opt in or out. If you choose to, you can also give us additional information, e.g. a profile picture, to make your social experience better, but this is totally optional. We collect the content you provide to us when you use our Service.
          </p>
          <h6>
            DATA WE RECEIVE FROM OUR PARTNERS:
          </h6>
          <p>
            If you decide to log in to our Service with Facebook, we receive from Facebook your Facebook username, real name, e-mail address and profile picture. We use those for the same purposes as when you give them to us directly. We also get your list of friends from Facebook, which we use to connect you with your friends who already use our Service.We may also receive personal information from our advertising and analytics partners, so that we are able to provide you a better Service.
          </p>
          <h6>
            SOME DATA IS COLLECTED AUTOMATICALLY WHEN YOU USE THE SERVICE:
          </h6>
          <p>
            Cookies and other similar technologies we use can collect some data automatically. You can find more details about our cookie usage at the end of this document in the “Cookies” -section.
          </p>
          <h4>
            UNTAPPED’S PARTNERS
          </h4>
          <p>
            Instead of doing absolutely everything on our own, we have partners that provide services and data processing for us. We have listed the type of partners we use:
            We use providers like Slack, Gatsby.js, GitHub and Netlify to store and deliver our content. These people don’t have access to the data itself but provide the infrastructure we need to provide our services.
            Services like MailChimp help us make sure we send the right messages to the right people and only the types of messages you want to receive.
            Google Analytics we use to determine how you learned about us and our Service, and how we can improve our user acquisition.
            We use partners and their technologies for our online advertising outside the Services. We run certain analytics ourselves, but we also use partners and their tools for running analytics. The Service includes social media interaction tools provided by our partners. These partners may provide us some data e.g. if you decide to link a third party tool to the Service (such as Facebook login) or decide to share content from our Service in social media. These partners may access and collect some of your data and some of them operate under their own privacy policies, which we urge you to check to learn how they use your data.
            If we need to combat fraud or illegal activity, we may exchange data with other companies and organizations. We may also provide data to authorities to respond to their lawful requests.
          </p>
          <h4>
            SOCIAL FEATURES
          </h4>
          <p>
            We have social features in our Service, which means that other users may see your profile data and your activities in the Service, or comments or questions you post in our forums.
          </p>
          <h4>
            WHAT WE DO WITH YOUR DATA
          </h4>
          <p>
            To sum it up, this is why we process your data:
          </p>

          <ul>
            <li>
              to perform the contract, we process your data to
              <ul>
                <li>set up your account, operate the Service and allow you to use it as well as to manage our customer relationship with you</li>
                <li>provide you the services and products you request</li>
                <li>process transactions</li>
                <li>send you communications regarding our services</li>
              </ul>
            </li>
            <li>
              to enable you to use an even better Service, we also have a legitimate interest to process necessary data
              <ul>
                <li>analyse, develop and improve our Service and your user experience, in addition to customizing it for you</li>
                <li>provide social features in the Service</li>
                <li>manage our customer relationship with you, provide support for you and respond to your questions and comments</li>
                <li>provide you with our offers and promotions in the Service, in-app and by email</li>
                <li>to serve, target, measure and develop our advertising</li>
                <li>send you updates, alerts and other related information</li>
                <li>to cooperate with authorities as required by law; and</li>
                <li>analyse and monitor that the use of the Service is acceptable and to prevent activity in the Service we determine to be misconduct or potentially illegal and take action against such use;</li>
              </ul>
            </li>
            <li>
              for all of the above purposes, we may analyse, profile and segment all collected data.
            </li> 
          </ul>

          <h4>
            TRANSFERS OF DATA
          </h4>
          <p>
            Since we also operate outside of Europe, we take additional measures to make sure that there are adequate safeguards in place to protect your data when personal data is transferred outside the European Economic Area (EEA). This includes having standard contractual clauses approved by the EU Commission in place to protect your data.
          </p>
          <h4>
            DATA RETENTION
          </h4>
          <p>
            We retain your data as long as your user account is active or as needed to provide the Service. You may end this relationship by deleting your account. We will then delete all your personal data from our own and our partners’ systems, including backups within 30 days, unless there is a legitimate business interest to retain the data, such as to comply with our legal obligations, to enforce our agreements or to resolve disputes. We also periodically review and delete user accounts that have been inactive for five years.
          </p>
          <h4>
            YOUR RIGHTS
          </h4>
          <p>
            The <a href="https://gdpr-info.eu/">GDPR regulation</a> provides our users in the European Union new and important rights to control their own personal data. We comply with all of these new rights requirements. You have the right to access your personal data we store about you. You can send a request via andrew@roborob.io to obtain a copy of your data.
            You also have the right to be forgotten. If you choose to delete your profile, we will delete all associated information and it will be like you never signed up in the first place (with the exceptions mentioned above, meaning that if we, for a legitimate reason, have the right to retain the data).
            The right to rectification simply means that you have the right to correct or update your information. You may do this by editing your personal details on your profile if your information changes or happens to be incorrect. Or you can contact us at andrew@roborob.io.
            You also have the right to restrict or object to us processing your information, which means e.g. that you can ask us to stop using your information to send you marketing communications. You can opt out from marketing communications by following the instructions in such communications.
            For limiting interest based advertising, please check out your ad tracking settings of your mobile device or web browser. For your Android or iOS device, select “limit ad tracking” (Apple iOS) or “opt-out of interest-based ads” (Android). For opting out of targeted advertising on the web, you can adjust your browser settings to limit certain tracking by cookies or by visit <a href="https://youradchoices.com/">www.youradchoices.com</a> and/or <a href="https://www.networkadvertising.org/">www.networkadvertising.org</a>.
            If you have any complaints about our handling of personal data or want to know about something very specific in this regard, please email us a andrew@roborob.io. We take these matters seriously and will look into all requests and complaints.
            Users from European Union member states also have the right to lodge a complaint with the data supervising authorities of their country.
          </p>
          <h4>
            DATA SECURITY
          </h4>
          <p>
            Data security is a very big part of keeping your personal data secure in the digital world. We manage our internal systems and take technical and organizational steps to make sure that we deliver our product in a secure way to our users. We expect the same level of dedication from our partners. 
          </p>
          <h4>
            COOKIES AND SIMILAR TECHNOLOGIES
          </h4>
          <p>
            Cookies are small files stored on a user’s computer (or other internet enable device, such as smartphone) when an online service has been used. We and our partners use cookies and similar technologies to provide the Service and personalize it for you, to run analytics and target advertisements. Some of the cookies used in the Service are “first party” cookies, i.e. from the website itself, and others are third party (partner) cookies that belong to the advertising, analytics entities or social networks.
            Users can adjust their browser settings to disable cookies or to delete cookies that have been saved in the browser, but this can result in some parts of the Service not functioning properly.
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
