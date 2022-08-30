import { Link } from 'gatsby'
import React from 'react'
import { getCurrentLangKey } from 'ptz-i18n';

function TextSection(props) {

  const url = props.location.pathname;
  const { langs, defaultLangKey } = props.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const aboutLink = langKey === 'en' ? (`/${langKey}/about`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/about`.replace(`/${defaultLangKey}`, '/'))
  const portfolioLink = langKey === 'en' ? (`/${langKey}/portfolio`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/portfolio`.replace(`/${defaultLangKey}`, '/'))

  return (
    <div className='home-text'>
        <p>{props.data.homeText.paragraph}</p>
        <h1>{props.data.homeText.headerOne}</h1>
        <h2>{props.data.homeText.headerTwo}</h2>
        <Link to={aboutLink} className='btn btn-primary'>{props.data.aboutButton}</Link>
        <Link to={portfolioLink} className='btn btn-secondary'>{props.data.portfolioButton}</Link>
    </div>
  )
}



export default TextSection