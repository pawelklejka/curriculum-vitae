import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import NavigationSection from './NavigationSection/NavigationSection'
import usePopout from '../../PortfolioSection/usePopout'
import gsap from 'gsap'

const tl = gsap.timeline()

function Header() {
  const {isShowing, toggle} = usePopout()
  
  const onClickOpenMenu = () => {
    tl
    .to(
      '.nav',
      {
        duration: 0.2,
        display: 'flex',
        opacity: 1
      }
    )

    .then(toggle())
    
   }




  return (
    <header className='header'>
        <div className='container'>
            <div className='row flex-end'>
                <button type='button' className='nav-toggler' onClick={onClickOpenMenu}>
                    <span><FontAwesomeIcon icon={faBars} size="lg" /></span>
                </button>
                {isShowing ? '' : <NavigationSection hide={toggle} isShowing={isShowing}/>}
            </div>
        </div>
    </header>
  )
}

export default Header