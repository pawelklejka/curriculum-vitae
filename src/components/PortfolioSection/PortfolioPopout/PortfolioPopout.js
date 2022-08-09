import React, { useEffect } from 'react'
import * as ReactDom from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark
  } from '@fortawesome/free-solid-svg-icons'

import gsap from 'gsap'

const tl = gsap.timeline()

function PortfolioPopout(props) {

    const animateInPopout = () => {
        tl.from(
            '.portfolio-popout',
            {   duration: 0.2,
                opacity: 0,
                scale: 0.9
                
            }
        )
    }
    const animateInContainer = () => {
        tl
        .to('html', 
            {
                duration: 0,
                overflowY: 'visible',
            }
        )
        .to(
            '#___gatsby',
            {   duration: 0.2,
                opacity: 1,
            }
        )
    }

    const animateOutPopout = (hide) => {
        tl.to(
            '.portfolio-popout',
            {   duration: 0.2,
                opacity: 0,
                
            }
        ).then(hide)
    }
    
    const onClickClosePopout = () => {
        animateOutPopout(props.hide) 
    }

    useEffect(() => {
      animateInPopout()
    
      return () => {
        animateInContainer()
      }
    }, [])
    


  return ReactDom.createPortal(
    <div className='portfolio-popout'>
        <div className='popout-inner' onClick={onClickClosePopout}>
            <div className='popout-content' onClick={e => e.stopPropagation()}>
                <div className='popout-header'>
                    <button className='btn btn-primary popout-close' onClick={onClickClosePopout}>
                        <FontAwesomeIcon icon={faCircleXmark} size="2x" />
                    </button>
                    <div className='popout-thumbnail'>
                        <img src={props.url} alt="popout-image" />
                    </div>
                    <h3>{props.name}</h3>
                </div>
                <div className='popout-body'>
                    <div className='description'>
                        <p>{props.description}</p>
                    </div>
                    <div className='general-info'>
                        <ul>
                            <li>Created - <span>{props.date}</span></li>
                            <li>technologies - <span>{props.technologies}</span></li>
                            <li>role - <span>{props.role}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>,
    document.body
  )
}

export default PortfolioPopout