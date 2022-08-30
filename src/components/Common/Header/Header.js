import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import NavigationSection from './NavigationSection/NavigationSection'
import usePopout from '../../../util/usePopout'
import gsap from 'gsap'

const tl = gsap.timeline()

function Header(props) {
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
                {isShowing ? '' : <NavigationSection hide={toggle} isShowing={isShowing} data={props.data} languages={props.languages} location={props.location}/>}
            </div>
        </div>
    </header>
  )
}

export default Header