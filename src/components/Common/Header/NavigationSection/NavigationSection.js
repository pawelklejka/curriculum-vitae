import React, { useEffect } from 'react'
import gsap from 'gsap'
import * as ReactDOM from 'react-dom'
import {Link} from 'gatsby'
import { getCurrentLangKey } from 'ptz-i18n';


const tl = gsap.timeline()

function NavigationSection(props) {
  const url = props.location.pathname
  const { langs, defaultLangKey } = props.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const aboutLink = langKey === 'en' ? (`/${langKey}/about`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/about`.replace(`/${defaultLangKey}`, '/'))
  const portfolioLink = langKey === 'en' ? (`/${langKey}/portfolio`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/portfolio`.replace(`/${defaultLangKey}`, '/'))
  const contactLink = langKey === 'en' ? (`/${langKey}/contact`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/contact`.replace(`/${defaultLangKey}`, '/'))
  const mainLink = langKey === 'en' ? (`/${langKey}/`.replace(`/${defaultLangKey}`, '')) : (`/${langKey}/`.replace(`/${defaultLangKey}`, '/'))

  
  const animateInMenu = () => {
    tl.to(
        '.nav',
        {   duration: 0.2,
            opacity: 1,
            display: 'block'            
        }
    )
}
  const animateOutMenu = (hide) => {
    tl.to(
        '.nav',
        {   duration: 0.2,
            opacity: 0,
            
        }
    ).then(hide)
}

  const onClickCloseMenu = () => {
      animateOutMenu(props.hide) 
  }

  useEffect(() => {
    animateInMenu()

  }, [])



  return ReactDOM.createPortal(
    <nav className='nav' onClick={onClickCloseMenu}>
        <div className='nav-inner' onClick={e => e.stopPropagation()}>
            <ul>
                <li><Link to={mainLink} className='nav-item'>{props.data.homeButton}</Link></li>
                <li><Link to={aboutLink} className='nav-item'>{props.data.aboutButton}</Link></li>
                <li><Link to={portfolioLink} className='nav-item'>{props.data.portfolioButton}</Link></li>
                <li><Link to={contactLink} className='nav-item'>{props.data.contactButton}</Link></li>
            </ul>
        </div>
    </nav>,
    document.body
  )
}

export default NavigationSection