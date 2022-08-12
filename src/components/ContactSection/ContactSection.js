import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faLinkedinIn, faInstagram} from '@fortawesome/free-brands-svg-icons'
import NeonBlobs from '../Common/Decoration/NeonBlobs'
import gsap from 'gsap'
import Header from '../Common/Header/Header'

const tl = gsap.timeline()

function ContactSection() {

    const animateSectionIn = () => {
        tl.from(
            '.contact-section',
            {
                opacity: 0,
                duration: 0.3
            }
        )
      }
      const animateSectionOut = () => {
          tl.to(
              '.contact-section',
              {
                  opacity: 0,
                  duration: 0.3
              }
          )
      }
      useEffect(() => {
          animateSectionIn()
          return () => {
              animateSectionOut()
          }
      })



  return (
    <section className='contact-section section-padding'>
        <Header />
        <NeonBlobs />
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h2>contact me</h2>
                </div>
                <div className='row' >
                    <div className='contact-form'>
                        <form>
                            <div className='input-group'>
                                <input type="text" placeholder='Name' className='input-control' required />
                            </div>
                            <div className='input-group'>
                                <input type="text" placeholder='Email' className='input-control' required />
                            </div>
                            <div className='input-group'>
                                <textarea placeholder='Message' className='input-control' required></textarea>
                            </div>
                            <div className='submit-btn'>
                                <button type='submit' className='btn'>
                                    send mail
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <h3>Email</h3>
                            <p>pawel.klejka12653@gmail.com</p>
                        </div>
                        <div className='contact-info-item'>
                            <h3>Phone</h3>
                            <p>+48 736 774 530</p>
                        </div>
                        <div className='contact-info-item'>
                            <h3>Email</h3>
                            <p>pawel.klejka12653@gmail.com</p>
                        </div>
                        <div className='contact-info-item'>
                            <h3>Follow me</h3>
                            <div className='social-links'>
                                <a href='#' target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                                <a href='#' target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                                <a href='#' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection