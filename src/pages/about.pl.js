import React from 'react'
import "../assets/css/main.css"
import AboutSection from '../components/AboutSection/AboutSection'
import Circles from "../components/Common/Decoration/Circles"
import { graphql } from "gatsby"

function about({data, location}) {

  const contentfulAboutSection = data.contentfulAboutSection
  const header = data.contentfulHeader
  const languages = data.site.siteMetadata.languages
  const skills = data.contentfulSkills

  return (
    <>
    <Circles />
    <AboutSection header={header} data={contentfulAboutSection} skills={skills.skillsList} location={location} languages={languages} />
    
    </>
  )
}

export default about

export const data = graphql`
query AboutSectionPl {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulHeader(node_locale: {eq: "pl"}) {
    aboutButton
    contactButton
    homeButton
    portfolioButton
  }
  contentfulAboutSection(node_locale: {eq: "pl"}) {
    aboutMeHeader
    contactButton
    experienceTabBtn
    educationTabBtn
    downloadButton
    cvPdf {
      url
    }
    educationTab {
      educationHeader
      timeline {
        date
        description
        place
        title
      }
    }
    experienceTab {
      experienceHeader
      timeline {
        date
        description
        place
        title
      }
    }
    aboutDescription {
      aboutDescription
    }
  }
  contentfulSkills {
    skillsList {
      name
    }
  }
}
`