import { graphql } from "gatsby"
import React, {useEffect, useState} from "react"
import "../assets/css/main.css"
import ChooseLanguage from "../components/ChooseLanguage/ChooseLanguage"
import Circles from "../components/Common/Decoration/Circles"
import MainSection from "../components/MainSection/MainSection"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';

//sprawdz w local store czy jest wybrany jezyk
//// 1) w localstore nie ma nic
////////// wyswietl wybor jezyku
////////// wybierz jezyk
////////// zapisz w local storage
////////// pobierz dane w danej wersji jezykowej
////////// wyswietl strone

//// 2) w localstore jest en-US 
///////// 
//jezeli nie to pojawia sie div z przyciskami wyboru jezyka
//(pobierac na kazdej stronie odpowiedni wycinek danych czy pobrac jeden duzy JSON i zapiasc w store redux?)
//pobierz dane przez graphql z zapytaniem na ktore nalozony jest filtr dotyczacy jezyka strony
//kliknij jezyk
//zapisz w pamieci lokalnej ktory jezyk zostal wybrany
//sprawdzaj w kazdej stronie jaki jezyk jest zapisany w lclStrg
//jezeli nie ma nic w lclStrg wybierz jezyk
//wlacz loader dopoki dane nie zostana pobrane
//zmien stan

const IndexPage = ({location, data}) => {

  const languages = data.site.siteMetadata.languages
  const allContentfulMainSection = data.contentfulMainSection
  const header = data.contentfulHeader


  return (
    <>

      <Circles />
      <MainSection data={allContentfulMainSection} location={location} languages={languages} header={header}/>
    </>


  )
}

export default IndexPage

export const data = graphql`
query MainSectionPl {
  site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }      
    }
  }
  contentfulMainSection(node_locale: {eq: "pl"}) {
    aboutButton
    portfolioButton
    homeText {
      headerOne
      headerTwo
      paragraph
    }
  }
  contentfulHeader(node_locale: {eq: "pl"}) {
    aboutButton
    contactButton
    homeButton
    portfolioButton
  }
}
`