import React from 'react'
import "../assets/css/main.css"
import ContactSection from '../components/ContactSection/ContactSection'
import { graphql } from "gatsby"
import Circles from "../components/Common/Decoration/Circles"

function contact({data, location}) {

  const contentfulContactSection = data.contentfulContactSection
  const header = data.contentfulHeader
  const languages = data.site.siteMetadata.languages

  return (
      <>
          <Circles />
          <ContactSection location={location} languages={languages} header={header} data={contentfulContactSection}/>
      </>
  )
}

export default contact


export const data = graphql`
query ContactSectionPl {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulContactSection(node_locale: {eq: "pl"}) {
    contactHeader
    nameField
    emailField
    phoneField
    messageField
    submitButton
    userMail
    userPhone
    followHeader
  }
  contentfulHeader(node_locale: {eq: "pl"}) {
    homeButton
    aboutButton
    contactButton
    portfolioButton
  }
}
`