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
query PortfolioSectionPl {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulPortfolioSection(node_locale: {eq: "pl"}) {
    portfolioHeader
    itemButton
  }
  allContentfulPortfolioItem(filter: {node_locale: {eq: "pl"}}) {
    nodes {
      image {
        gatsbyImageData
        title
      }
      date
      description{
        description
      }
      title
      technologies
    }
  }
  contentfulHeader(node_locale: {eq: "pl"}) {
    homeButton
    aboutButton
    contactButton
    portfolioButton
  }
}
`