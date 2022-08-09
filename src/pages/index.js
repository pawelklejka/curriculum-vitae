import * as React from "react"
import "../assets/css/main.css"
import AboutSection from "../components/AboutSection/AboutSection"
import MainSection from "../components/MainSection/MainSection"
import PortfolioPopout from "../components/PortfolioSection/PortfolioPopout/PortfolioPopout"
import PortfolioSection from "../components/PortfolioSection/PortfolioSection"

const IndexPage = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <PortfolioSection />
    </>


  )
}

export default IndexPage
