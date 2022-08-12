import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='contact-info-item'>
                    <div className='social-links'>
                                <a href='https://www.facebook.com/profile.php?id=100002926954011' target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                                <a href='https://www.instagram.com/fountainatlas/' target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                                <a href='https://www.linkedin.com/in/paweł-klejka-895526201/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                        </div>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer