import { graphql } from "gatsby"
import React, {useEffect, useState} from "react"
import "../assets/css/main.css"
import ChooseLanguage from "../components/ChooseLanguage/ChooseLanguage"
import Circles from "../components/Common/Decoration/Circles"
import MainSection from "../components/MainSection/MainSection"
import ReactHowler from 'react-howler'
import gsap from "gsap"

const tl = gsap.timeline()

const IndexPage = ({location, data}) => {
  const [hasLanguage, setHasLanguage] = useState(false)
  const languages = data.site.siteMetadata.languages
  const header = data.contentfulHeader
  const contentfulMainSection = data.contentfulMainSection

  const toggle = () => setHasLanguage(!hasLanguage)

  useEffect(() => {
    console.log('mount');
    return console.log('unmount');
  })
  return (
    <>
      <Circles />
      {hasLanguage ? <MainSection data={contentfulMainSection} location={location} languages={languages} header={header}/> : <ChooseLanguage toggle={toggle} />} 
    </>


  )
}

export default IndexPage

export const data = graphql`
query MainSection {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulMainSection(node_locale: {eq: "en-US"}) {
    aboutButton
    portfolioButton
    homeText {
      headerOne
      headerTwo
      paragraph
    }
  }
  contentfulHeader(node_locale: {eq: "en-US"}) {
    aboutButton
    contactButton
    homeButton
    portfolioButton
  }
}
`
