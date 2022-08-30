import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faLinkedinIn, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import NeonBlobs from '../Common/Decoration/NeonBlobs'
import gsap from 'gsap'
import Header from '../Common/Header/Header'
import { useForm, ValidationError } from '@formspree/react';
import { navigate } from 'gatsby'


const tl = gsap.timeline()

function ContactSection(props) {
    const [state, handleSubmit] = useForm("mvoygrkv");

    const onClickSubmit = e => {
        handleSubmit(e)
            .then(() => {
                setTimeout(() => {
                    navigate('/')
                }, 4000)
            })
    }
    const animateSectionIn = () => {
        tl.from(
            '.contact-section',
            {
                opacity: 0,
                duration: 0.3
            }
        )
      
        tl.from(
            '.succeded-section h1',
            {
                opacity: 0,
                duration: 0.2
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
          tl.to(
              '.succeded-section h1',
              {
                  opacity: 0,
                  duration: 0.2
              }
          )
      }
      useEffect(() => {
          animateSectionIn()
          console.log('onmount');
          return () => {
              animateSectionOut()
          }
      })

    if (state.succeeded) {
        return (
        <section className='succeded-section'>
            <h1 className='center'>Thanks for sending message!</h1>
        </section>
        )
    } else {

        return (
          <section className='contact-section section-padding'>
              <Header data={props.header} languages={props.languages} location={props.location} />
              <NeonBlobs />
              <div className='container'>
                  <div className='row'>
                      <div className='section-title'>
                          <h2>{props.data.contactHeader}</h2>
                      </div>
                      <div className='row' >
                          <div className='contact-form'>
                              <form onSubmit={(event) => onClickSubmit(event)}>
                                      <input type="text" id='text' name="text" placeholder={props.data.nameField} className='input-group input-control' required />
                                      <input type="email" id='email' name="email" placeholder={props.data.emailField} className='input-group input-control' required />
                                      <ValidationError prefix="Email" field="email" errors={state.errors} />

                                      <textarea type='message' id='message' name="message" placeholder={props.data.messageField} className='input-group input-control' required></textarea>
                                      <ValidationError prefix="Message" field="message"errors={state.errors} />
                                      <button type="submit" className='btn btn-primary submit-btn' disabled={state.submitting}>
                                          {props.data.submitButton}
                                      </button>
                                      <ValidationError errors={state.errors} />
                              </form>
                          </div>
                          <div className='contact-info'>
                              <div className='contact-info-item'>
                                  <h3>{props.data.emailField}</h3>
                                  <p>{props.data.userMail}</p>
                              </div>
                              <div className='contact-info-item'>
                                  <h3>{props.data.phoneField}</h3>
                                  <p>{props.data.userPhone}</p>
                              </div>
                              <div className='contact-info-item'>
                                  <h3>{props.data.followHeader}</h3>
                                    <div className='social-links'>
                                        <a href='https://www.facebook.com/profile.php?id=100002926954011' target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
                                        <a href='https://www.instagram.com/fountainatlas/' target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                                        <a href='https://www.linkedin.com/in/paweł-klejka-895526201/' target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
                                        <a href='https://github.com/pawelklejka' target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                                  </div>
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}

export default ContactSection