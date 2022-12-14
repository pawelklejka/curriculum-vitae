import React from 'react'
import "../assets/css/main.css"
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import { graphql } from "gatsby"
import Circles from "../components/Common/Decoration/Circles"

function portfolio({data, location}) {

  const contentfulPortfolioSection = data.contentfulPortfolioSection
  const contentfulPortfolioItems = data.allContentfulPortfolioItem.nodes.reverse()
  const header = data.contentfulHeader
  const languages = data.site.siteMetadata.languages

  return (
    <>      
        <Circles />
        <PortfolioSection location={location} languages={languages} header={header} data={contentfulPortfolioSection} items={contentfulPortfolioItems}/>
    </>
  )
}

export default portfolio

export const data = graphql`
query PortfolioSection {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulPortfolioSection(node_locale: {eq: "en-US"}) {
    portfolioHeader
    itemButton
  }
  allContentfulPortfolioItem(filter: {node_locale: {eq: "en-US"}}) {
    nodes {
      title
      date
      description{
        description
      }
      technologies
      image {
        gatsbyImageData
        title
      }
    }
  }
  contentfulHeader(node_locale: {eq: "en-US"}) {
    homeButton
    aboutButton
    contactButton
    portfolioButton
  }
}
`