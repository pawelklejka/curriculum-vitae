import React, { useEffect, useState } from 'react'
import ImageSection from '../Common/ImageSection/ImageSection'
import skillsData from '../AboutSection/Skills/skills.json'
import educationData from './TabContent/Timeline/education-timeline.json'
import experienceData from './TabContent/Timeline/experience-timeline.json'
import Skills from './Skills/Skills'
import AboutTabs from './AboutTabs/AboutTabs'
import TabContent from './TabContent/TabContent'
import NeonBlobs from '../Common/Decoration/NeonBlobs'
import gsap from 'gsap'
import Header from '../Common/Header/Header'
import { Link } from 'gatsby'

const tl = gsap.timeline()

function AboutSection() {
    const [active, setActive] = useState(true)

    const onTabClick = () => setActive(!active);

    const animateSectionIn = () => {
        tl.from(
            '.about-section',
            {
                opacity: 0,
                duration: 0.3
            }
        )
    }
    const animateSectionOut = () => {
        tl.to(
            '.about-section',
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
    }, [])

  return (
    <section className='about-section section-padding'>
        <NeonBlobs />
        <Header />
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h2>about me</h2>
                </div>
            </div>
            <div className='row'>
                    <ImageSection type={'about-img'}/>
                <div className='about-text'>
                    
                    <Skills data={skillsData}/>
                    <AboutTabs active={active} onTabClick={onTabClick}/>
                    <TabContent active={active} data={educationData}/>
                    <TabContent active={!active} data={experienceData}/>
                    <a href='#' className='btn btn-primary'>download CV</a>
                    <Link to='/contact' className='btn btn-primary'>contact me</Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection