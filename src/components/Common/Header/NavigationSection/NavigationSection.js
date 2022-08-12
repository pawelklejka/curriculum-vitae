import React, { useEffect } from 'react'
import gsap from 'gsap'
import * as ReactDOM from 'react-dom'
import {Link} from 'gatsby'

const tl = gsap.timeline()

function NavigationSection(props) {

  

  
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
                <li><Link to='/' className='nav-item'>Home</Link></li>
                <li><Link to='/about' className='nav-item'>About</Link></li>
                <li><Link to='/portfolio' className='nav-item'>Portfolio</Link></li>
                <li><Link to='/contact' className='nav-item'>Contact</Link></li>
            </ul>
        </div>
    </nav>,
    document.body
  )
}

export default NavigationSection