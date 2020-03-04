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
        title="Terms of Service"
        keywords={[`mtg`, `magic the gathering`, `community`, `tech`, `helsinki`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="tos-id">
            Terms of Service
          </h2>

          <p className="top-margin">
            Effective as of March 1st 2020, last edited March 1st 2020.
          </p>
          <p>
            These terms of service (the “Terms”) govern your access to and use of Untapped Grounds´ and all of its affiliates (hereinafter “Untapped” or “us/we/our”) services, products, applications and websites (collectively the “Services”), so please carefully read them before using the Services. Use of the Services is also governed by Untapped <a href="/privacy-policy">privacy policy</a> (the “Privacy Policy”). Supplemental terms, policies and guidelines, such as policies related to specific services (including without limitation forums, sweepstakes etc.) as well as other operating rules and policies that may be published from time to time, may apply to the use of Services, and your use of the Services shall be governed also by such terms, policies and guidelines.
          </p>
          <p>  
            These Terms, Privacy Policy, and Community Guidelines, as well as all policies and guidelines, which are incorporated herein by reference, constitute a legally binding agreement (the “Agreement”) between you and Untapped in relation to your use of the Services. You are announcing that you have read and understood the Agreement, and agree to be bound by it. If you do not agree to (or are not able to comply with) the Agreement, you may not access or use the Services or any of its content.
          </p>
          <p> 
            You may also be required to register an account on the Services. By registering for an account or otherwise using the Services, you represent that you are either at least 18 years of age, or you are at least 13 years of age or more and have your parent or legal guardian reviewed and agreed to this Agreement on your behalf. The Services are intended for people who are at least 13 years of age. If you access the Services from a social networking site, such as Facebook, you shall comply with its terms of service as well as these Terms.
          </p>
          <p>   
            BY REGISTERING FOR, USING OR OTHERWISE ACCESSING THE SERVICES, OR ANY COMPONENT THEREOF, IN ANY MANNER WHATSOEVER, YOU ARE CONSENTING TO BECOME A PARTY TO THE AGREEMENT AND AGREEING TO BE BOUND BY AND COMPLY WITH THE TERMS AND CONDITIONS HEREIN WHICH AFFECT YOUR LEGAL RIGHTS AND OBLIGATIONS. PLEASE DO NOT INSTALL, USE OR OTHERWISE ACCESS TO THESE SERVICES IF YOU DO NOT AGREE TO THESE TERMS. USE OF THE SERVICES IS VOID WHERE PROHIBITED
          </p>
          <p>   
            IF YOU ARE A PARENT OR GUARDIAN AND YOU PROVIDE CONSENT FOR YOUR CHILD TO USE THE SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE IN RESPECT OF THEIR USE. You accept full responsibility for any unauthorised use of the Services by minors in connection with your account.
          </p>
          <p>   
            Should you have any questions relating to Terms, please contact us at andrew@roborob.io.
          </p>
          <h4>
            CHANGES
          </h4>
          <p>
            Untapped reserves at its discretion the right to change, modify or remove parts these Terms, its Privacy Policy or any its other relevant policies at any time by posting the amended terms on the Untapped Services, or by any other method of notice we deem appropriate (including e-mail).
          </p>
          <p>
            Your continued use of the Services shall constitute your acceptance of the changed Terms. If as a result of changes or modifications made in the Terms, or the Privacy Policy or any other policy you are no longer agreeing to any part of the then current version of the Terms, the Privacy Policy or any other policy, you must stop using the Services.
          </p>
          <h4>
            ACCESS AND LIMITED LICENSE TO USE THE SERVICES
          </h4>
          <p>
            In consideration of you agreeing to abide by these Terms of Service, we hereby grant to you a non-exclusive, non-transferable, licence to:
          </p>
          <p>
            a. use the Services in order to view the Content (as defined below) and to request tickets to attend a board game, card game (e.g. Magic: the Gathering) or other live event (“Event”) taking place at a venue determined by Untapped (“Venue”);
          </p>
          <p>   
            b. submit, upload or post Content on the Services strictly as permitted in these Terms of Service and any other applicable terms; and
          </p>
          <p>
            c. communicate with other members of Untapped strictly in accordance with these Terms of Service.
          </p>
          <p>
            Untapped reserves the right to modify the license granted in this section and the restrictions described in these Terms, including, without limitation, by charging fees therefore and/or making certain features available that may invite you to use the Service Content in a manner not described in these Terms. However, charging fees will always be subject to your approval.
          </p>
          <p>
            Untapped may add, change, discontinue, remove or suspend any of the Services, Service Content or any other feature of the Services (including without limitation financial terms availability or equipment needed for access or use) at any time, without notice and without liability.
          </p>
          <h4>
            INFORMATION COLLECTION AND USE
          </h4>
          <p>
            If you are under 13 you are forbidden to disclose any personal information without appropriate parental or legal guardian approval. We respect your privacy rights and recognize the importance of protecting any information collected about you. Our Privacy Policy as amended from time to time is available <a href="/privacy-policy">here</a> and applicable to these Terms. Privacy Policy defines how, why and to which extent Untapped and its affiliates collect and use personal and non-personal information in relation to our products and services.
          </p>
          <p>
            By installing, accessing or using the Services, you consent to these information collection and usage terms, including (where applicable) the transfer of data into a country outside of the European Union and/or the European Economic Area or the United States of America. For further information on the processing of your data, please see our Privacy Policy.
          </p>
          <h4>
            USER ACCOUNT
          </h4>
          <p>
            Certain areas and functions of the Services require registration, while other areas and functions do not. When you create an account, you agree to provide true, accurate, current and complete information about yourself as prompted by the service registration process (collectively “Registration Data”). You further consent and authorize us to verify your Registration Data as required for your use of and access to the Services, as applicable. Once registered for the Services, you shall receive a unique user ID and password in connection with your account. You are responsible for safeguarding the password that you use to access the Services and you agree not to disclose your password to any third party.You are responsible for any activity using your account, whether or not you authorized that activity. You agree to immediately notify Untapped if you believe that your user account has been accessed or used without your authorization. Untapped reserves the right to refuse or limit the registration for any reason, or suspend or terminate your account at any time and for any reason.
          </p>
          <p>
            We reserve the right to remove any usernames at any time and for any reason, including but not limited to claims by a third party that a username violates the third party’s rights.
          </p>
          <h4>
            THIRD PARTY LINKS
          </h4>
          <p>
            The Services may contain links to third-party websites, content or resources (“third-party services”). These third-party services may have their own terms of service and privacy policies that govern the use of such third-party services. Untapped is not responsible or liable for actions of such third-party services or any content or materials provided therein and Untapped does not in any way endorse such third-party services or the content or any materials made available there.You are solely responsible for your use of any such third-party services and you agree to access such third-party services at your own risk. Also, if we provide you with any software under an open source license, there may be provisions in those licenses that expressly conflict with these Terms, in which case the open source provisions will apply.
          </p>
          <p>
            You agree that Untapped shall not be held responsible or liable, directly or indirectly, for any loss or damage caused or alleged to have been caused in any way whatsoever related to any such external location and you hereby irrevocably waive any and all claims related thereto against Untapped.
          </p>
          <h4>
            INTELLECTUAL PROPERTY
          </h4>
          <p>
            Untapped has no affiliation to Wizards of the Coast LLC or Hasbro, Inc. Artworks, images, “untap” symbol, Magic: the Gathering concept and designs   used in the Services belong to their respective owners.
          </p>
          <p>
            The Services and Service Content are the property of Untapped or its licensors. These Terms confer only the right to use the Services and the Service Content subject to the licenses granted herein, and they do not convey any right of ownership in or to the Services, Service Content or any other materials therein. We and our licensors reserve all rights in the Services and Service Content not expressly granted to you in these Terms.
          </p>
          <p>
            All materials that are part of the Services (including past, present and future versions), including, without limitation: graphics; layout; text; data images; audio and/or video; designs; concepts and methods of operation; themes, advertising copy; logos; domain names; trade names and marks; service marks and trade identities; user accounts; any and all copyrightable material (including source and object code); the “look and feel” of the Services; the compilation, assembly and arrangement of the materials of the Services; and all other Service Content and applications are owned, controlled or licensed by Untapped and are protected from unauthorized use, copying and dissemination including without limitation by copyright, trademark, patent, trade secret publicity and other laws, rules, regulations and international treaties. Copyright to third-party content appearing on the Services are the property of their respective owners.
          </p>
          <p>
            All Untapped trademarks (including without limitation Untapped Grounds) and service marks are solely the property of Untapped. All other trademarks and service marks appearing on the Services are the property of their respective owners, including, in some instances, Untapped. You may not display our Services or content in frames or “in-line links” without prior express written permission from us.
          </p>
          <p>
            You agree not to encumber, license, modify, publish, copy, sell, transfer, transmit or in any way exploit, any of the content of the Services (including Service Content not created by you), nor will you attempt to do so. You agree not to copy, redistribute, publish or otherwise exploit material which you download from the Services, except as expressly permitted herein, without the express prior written permission of Untapped and the owner of such Service Content (from whom you are solely responsible for obtaining permission). You further agree and acknowledge that you shall not acquire any ownership, copyright or other rights by downloading or installing copies, content or other material of or from the Services.
          </p>
          <h4>
            CONTENT RIGHTS
          </h4>
          <h6>
            YOUR CONTENT
          </h6>
          <p>
            You are solely responsible for any communications or materials you submit to the Services or transmit to other users of the Services, by an application, website, e-mail or by participating in blogs, message boards, online forums and other functionality, where you may have the opportunity, to create, submit, post, display, transmit, perform, publish, distribute, broadcast, and comment on content and materials to Untapped and/or to or via the Services, including, without limitation, data, text, writings, audiovisual effects, artwork, photographs, videos, graphics, comments, suggestions or chat or message postings or other material (collectively, excluding Service Content , “User Content”).
          </p>
          <h6>
            REPRESENTATIONS AND WARRANTIES
          </h6>
          <p>
            You affirm, represent, and warrant that your User Content is not in violation of any laws, contractual restrictions or other third party rights, and that you own or have the necessary licenses, rights, consents, and permissions to submit, publish and share the User Content you submit, including the right to grant all of the rights and licenses in these Terms without Untapped incurring any third party obligations or liability arising out of its exercise of the rights thereto granted herein by you. You shall be solely responsible for the User Content and the consequences of submitting, publishing, and sharing the User Content on the Service.
          </p>
          <h6>
            UNSOLICITED IDEA SUBMISSION POLICY
          </h6>
          <p>
            You further agree that Untapped is free to use any ideas, information, concepts, know-how or techniques contained in any User Content you submit in Services or send to the Untapped, for any purposes whatsoever, including, without limitation, developing, producing, marketing and otherwise exploiting products and/or services using such User Content, and without remuneration of any kind.
          </p>
          <h6>
            REPORTING INFRINGEMENTS
          </h6>
          <p>
            We respect the copyrights and other intellectual property rights of others. If you discover any content in the Service that you believe infringes your copyright (“Disputed Content”), please report this to Untapped, as follows:
          </p>
          <p>
            A. You may send Untapped a written copyright infringement notification pursuant to Section 191 of the Finnish Information Society Code. Please make sure that you include the following information in your notification:
          </p>
          <ol>
            <li>
              your full name and contact information (address and telephone number, a valid email address, as well as your Untapped username, if applicable);
            </li>
            <li>
              an itemization of the Disputed Content, including the Untapped URL(s) where such Disputed Content can be located;
            </li>
            <li>
              your confirmation that you have a good-faith belief that the Disputed Content which is the subject of your copyright infringement notification is illegally available;
            </li>
            <li>
              information concerning the fact that you have requested the relevant third-party content provider to remove the Disputed Content without effect, or that such third-party content provider could not be identified;
            </li>
            <li>
              your confirmation that you are the owner of the exclusive right which the Disputed Content allegedly infringes, or that you are entitled to act on behalf of the relevant third-party rights holder;
            </li>
            <li>
              your signature (physical or electronic).
            </li>
          </ol>
          <p>  
            B. Your notice concerning the claimed infringement should be sent to Untapped by email to andrew@roborob.io.
          </p>
          <p>
            Untapped has no obligation to monitor or enforce your intellectual property rights to your User Content but has the right to protect and enforce its and its licensees’ licensed rights to your User Content, including, without limitation, by bringing and controlling actions in your name and on your behalf (at our cost and expense, to which you hereby consent and irrevocably appoint Untapped as your attorney-in-fact, with the power of substitution and delegations, which appointment is coupled with an interest).
          </p>
          <h4>
            USAGE RESTRICTIONS
          </h4>
          <p>
            As a user of the Services, you agree that your User Content, and your conduct on the Services will not:
          </p>
          <p>
            a. include any offensive comments that are connected to race, national origin, gender, sexual preference or physical handicap;
          </p>
          <p>
            b. include profanity or any obscene, indecent, pornographic, sexual or otherwise objectionable content or language;
          </p>
          <p>
            c. violate the contractual, personal, intellectual property or other rights of any party, or promote or constitute illegal activity;
          </p>
          <p>
            In addition, your activities on the Services and in connection with the Service Content not:
          </p>
          <p>
            a. reveal any personal information about another individual, including another person’s address, phone number, e-mail address, credit card number or any information that may be used to track, contact or impersonate that individual
          </p>
          <p>
            b. attempt to impersonate any other party
          </p>
          <p>
            c. trick, defraud or mislead other users
          </p>
          <p>
            d. engage in any commercial activities, including, without limitation, any attempt to raise money for anyone or advertise or promote a product, service, pyramid scheme or other multi-tiered marketing scheme
          </p>
          <p>
            e. violate these Terms; or any local, state, federal or international law, rule or regulation or any other requirements or restrictions posted by Untapped on the Services
          </p>
          <p>
            f. upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses or other material that interferes with any party’s uninterrupted use and enjoyment of the Services, the Service Content, the User Content or modifies, impairs, disrupts, alters or interferes with the use, features, functions, operation or maintenance of the Services, the Service Content or the User Content
          </p>
          <p>
            g. copy or adapt the object code of the Service’s software, HTML, JavaScript or other code
          </p>
          <p>
            h. reverse engineer, decompile, reverse assemble, modify or attempt to discover any source code that the Services create to generate its web pages or any software or other products or processes accessible through the Services
          </p>
          <p>
            i. upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism
          </p>
          <p>
            j. except as may be the result of standard search engine or Internet browser usage, use or launch any automated system, including, without limitation, any spider, robot (or “bot”), scraper or offline reader that accesses the Services or use or launch any unauthorized script
          </p>
          <p>
            k. cover or obscure any notice, banner or advertisement on the Services;
          </p>
          <p>
            l. disguise the source of your User Content or other information you submit to the Services; and/or interfere with or circumvent any security feature of the Services or any feature that restricts or enforces limitations on use of or access to the Services or the Service Content.
          </p>
          <p>
            Untapped does not control or endorse the content, messages or information found in User Content portions of the Services or external sites that may be linked to or from the Services and, therefore, Untapped specifically disclaims any responsibility with regard thereto.
          </p>
          <h4>
            EVENTS
          </h4>
          <p>
            Untapped, its representative, employees or agents, the organisers of the Event and the Owner of the Venue (collectively the “Organisers”) reserve the right to refuse entry to any persons who are in the opinion of the Organisers posting a safety or security risk at or in the vicinity of the Event’s venue during, immediately prior to or immediately following the Event.
          </p>
          <p>
            The Organisers reserve the right to prohibit within the Venue:
          </p>
          <p>  
            a. items which are or may be illegal. Anyone found in possession of illegal or contraband goods may also be liable for prosecution;
          </p>
          <p>  
            b. weapons, ammunition, explosives, fireworks or any other item which in our reasonable opinion, may cause danger or disruption to any Event or to other visitors (regardless of whether or not such item is illegal or is carried for specific purposes).
          </p>
          <p>  
            You are responsible for safeguarding your property when at the Venue and Untapped will have no liability for property that is lost, stolen or damaged when at the Venue.
          </p>
          <p>  
            When attending an Event in the Venue you agree:
          </p>
          <p>  
            a. to pay for any losses or damages to the property and contents caused by the you or a member of your party, unless the cost of making good such loss or damage can be fully recovered under any householder's insurance policies maintained by the owners of the Venue without any loss of no-claims bonuses and subject to any excess payments;
          </p>
          <p>  
            b. not to cause disruption to other people at the Event and further agree to respect the Venue and not to cause any damage to the Venue. You may be ejected from the Venue if, in the reasonable opinion of the Organisers, you are a risk to the safety of others at the Venue and/or may affect the enjoyment of others at the Venue and/or the running of the Event or may cause damage, nuisance or injury. Examples including being (or appearing to be) drunk, incapable, intoxicated or under the influence of illegal drugs, abusive, threatening, behaving anti-socially, carrying or having on your person any of the prohibited items mentioned above or in breach of any of these Terms of Service. If you do any of the acts mentioned above, Untapped reserves the right to eject you from the Venue and terminate your subscription to the Services.
          </p>
          <p>  
            If you are under the age of 18, you must obtain your parents’ or legal guardians’ prior authorisation, permission and consent to attend an Event. Under 16s must be accompanied by an adult.
          </p>
          <p>  
            CCTV and cameras may be present in and around the Venue. By registering for an Event and/or attending the Venue, you give your express consent to photograph, videotape, or otherwise digitally record or collect your image, likeness, voice, or other information you provide (“Footage”), all rights in which will be owned by us or the relevant third party. You also agree that any such Footage may be used by us in any and all media for any purpose at any time throughout the world, including (with the exception of CCTV or security Footage) for commercial purposes without compensation or payment to you. [If you wish that any Footage used by Untapped or the Organisers for any and all media purposes does not contain your image, please speak to the Organisers at the Venue and they will arrange for your image to be removed, blurred or concealed in any Footage used.
          </p>
          <p>  
            You may bring food and beverages into the Venue unless otherwise stated by Organisers.
          </p>
          <p>  
            With regard to matters of health and safety:
          </p>
          <p>  
            a. in the event of an emergency, please follow instructions and directions from stewards and/;or staff;
          </p>
          <p>  
            b. no smoking is permitted in any part of the Venue.
          </p>
          <p>  
            If you have any convictions or court orders that prevent you from attending events where there are large groups of people or children present, you agree that you will not attend Events organised through or by Untapped. Untapped reserves the right to eject you from any Event or Venue at which you are present in contravention of a court order or conviction.
          </p>
          <p>  
            Untapped shall not be liable in the event of a cancellation, postponement or material alteration of an Event. It is your responsibility to check the Services for news of any cancellation, postponement or alteration of the Event. Information on such matters will be made available by Untapped as soon as reasonably practicable. You are advised that the Services cannot always be updated immediately and that circumstances giving rise to cancellation or alterations can sometimes arise immediately prior to an Event. 
          </p>
          <h4>
            DISCLAIMER OF WARRANTIES
          </h4>
          <p>
            THE SERVICES AND SOFTWARE ARE PROVIDED “AS IS” AND AN “AS AVAILABLE” BASIS, AT YOUR OWN RISK, WITHOUT EXPRESS OR IMPLIED WARRANTY OR CONDITION OF ANY KIND. WE ALSO DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. WE MAKE NO REPRESENTATION OR WARRANTY THAT ANY MATERIAL, CONTENT, PRODUCTS OR SERVICES DISPLAYED ON OR OFFERED THROUGH THE SERVICES ARE ACCURATE, COMPLETE, APPROPRIATE, RELIABLE, OR TIMELY. WE ALSO MAKE NO REPRESENTATIONS OR WARRANTIES THAT THE SERVICES WILL MEET YOUR REQUIREMENTS AND/OR YOUR ACCESS TO AND USE OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, FREE OF VIRUSES, MALICIOUS CODE, OR OTHER HARMFUL COMPONENTS, OR OTHERWISE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. ACCORDINGLY, SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
          </p>
          <p>  
            Untapped may distribute content supplied by third parties and users of the services and may provide links to external locations operated by third parties. All communication expressed or made available by third parties whatsoever, including, without limitation, by other users, is solely made by the respective author(s) or distributor(s), and Untapped does not guarantee the accuracy, completeness or usefulness thereof, or its merchantability or fitness for any particular purpose; nor do they make any guarantee, endorsement or warranty with respect thereto.
          </p>
          <h4>  
            LIMITATION OF LIABILITY
          </h4>
          <p>  
            TO THE FULLEST EXTENT PERMITTED BY LAW, THE DISCLAIMERS OF LIABILITY CONTAINED HEREIN APPLY TO ANY AND ALL DAMAGES OR INJURY WHATSOEVER CAUSED BY OR RELATED TO USE OF, OR INABILITY TO USE, THE SERVICES UNDER ANY CAUSE OR ACTION WHATSOEVER OF ANY JURISDICTION, INCLUDING, WITHOUT LIMITATION, ACTIONS FOR BREACH OF WARRANTY, BREACH OF CONTRACT OR TORT AND THAT UNTAPPED SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES IN ANY WAY WHATSOEVER ARISING OUT OF THE USE OF, OR INABILITY TO USE, THE SERVICES. YOU FURTHER SPECIFICALLY ACKNOWLEDGE THAT UNTAPPED IS NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD UNTAPPED LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OTHER USERS OF THE SERVICES AND OPERATORS OF EXTERNAL SITES, AND THAT THE RISK OF THE SERVICES AND EXTERNAL SITES AND OF INJURY FROM THE FOREGOING RESTS ENTIRELY WITH YOU. UNDER NO CIRCUMSTANCES WILL THE UNTAPPED BE LIABLE TO YOU, COLLECTIVELY, FOR MORE THAN THE AMOUNT YOU HAVE PAID TO UNTAPPED.
          </p>
          <p>  
            BY ACCESSING THE SERVICES, YOU UNDERSTAND THAT YOU MAY BE WAIVING RIGHTS WITH RESPECT TO CLAIMS THAT ARE AT THIS TIME UNKNOWN OR UNSUSPECTED. YOU ACKNOWLEDGE THAT THE DISCLAIMERS, LIMITATIONS AND WAIVERS OF LIABILITY CONTAINED HEREIN WILL SURVIVE ANY TERMINATION OF YOUR ACCOUNT(S) OR ANY SERVICES.
          </p>
          <h4>  
            INDEMNIFICATION
          </h4>
          <p>  
            You agree to defend, indemnify and hold harmless, Untapped, its affiliates, and their respective officers, directors, employees, agents, licensors, representatives, and third party providers to the Services from and against all claims and expenses, including attorneys’ fees and costs, arising from, incurred as a result of, or in any manner related to any claim or action based upon (a) your breach of, or failure to comply with, the terms and conditions of this Agreement, (b) your use of the Services, and/or (c) the use of the Services by any other person using your IDs. The provisions in this paragraph will survive any termination of your account(s) or the Services.
          </p>
          <h4>  
            FORCE MAJEURE
          </h4>
          <p>  
            Untapped shall not be liable for any delay or failure to perform resulting from causes outside the reasonable control of Untapped, including without limitation any failure to perform hereunder due to unforeseen circumstances or cause beyond Untapped’s control such as acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor or materials.
          </p>
          <h4>  
            TERMINATION
          </h4>  
          <p>  
            You may terminate this Agreement by deleting your account and thereafter by ceasing to use the Services.
          </p>
          <p>  
            Without limiting our other remedies, Untapped may limit or suspend your access to the Services and/or terminate this Agreement and take technical and legal steps to prevent you from accessing the Services, at any time, if (i) you are deemed to be a repeat infringer as described above; (ii) we believe you are in any way breach any provision of the Agreement, including without limitation these Terms or related policies or guidelines; (iii) Untapped elects at its discretion to cease providing access to the Services in the jurisdiction where you reside or from where you are attempting to access the Services, or (iv) in other reasonable circumstances as determined by Untapped at its discretion.
          </p>
          <p>  
            Upon termination for any reason, you must cease all use of the Services. Your termination for any reason shall not release you from any liabilities or obligations set forth in the Agreement which (a) have expressly been stated as surviving any such termination or expiration, or (b) remain to be performed, or by their nature would be intended to be applicable following any such termination or expiration.
          </p>
          <p>  
            Untapped reserves the right to discontinue any aspect of the Services at any time.
          </p>
          <h4>  
            GOVERNING LAW AND DISPUTE RESOLUTION
          </h4>
          <p>  
            These Terms will be governed by the laws of Finland without reference to its choice of law rules. The United Nations Convention for the International Sale of Goods shall not apply. Any dispute, controversy or claim arising out of or relating to the Agreement or the breach, termination or validity thereof shall be finally settled at District Court of Helsinki, Finland having the sole jurisdiction. YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST UNTAPPED ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. If the matter cannot be resolved through negotiation, you may, as a consumer, also submit the matter to the Consumer Disputes Board (<a href="https://www.kuluttajariita.fi/fi/">Kuluttajariitalautakunta</a>) for resolution. The <a href="http://ec.europa.eu/odr">Online Dispute Resolution website</a> is an official website managed by the European Commission dedicated to helping consumers and traders resolve their disputes out-of-court.
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
