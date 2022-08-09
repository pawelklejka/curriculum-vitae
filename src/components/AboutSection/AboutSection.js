import React, { useState } from 'react'
import ImageSection from '../ImageSection/ImageSection'
import skillsData from '../AboutSection/Skills/skills.json'
import educationData from './TabContent/Timeline/education-timeline.json'
import experienceData from './TabContent/Timeline/experience-timeline.json'
import Skills from './Skills/Skills'
import AboutTabs from './AboutTabs/AboutTabs'
import TabContent from './TabContent/TabContent'
import NeonBlobs from '../NeonBlobs/NeonBlobs'

function AboutSection() {
    const [active, setActive] = useState(true)

    const onTabClick = () => setActive(!active);

  return (
    <section className='about-section section-padding'>
        <NeonBlobs />
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
                    <a href='#' className='btn btn-primary'>download cv</a>
                    <a href='#' className='btn btn-primary'>contact me</a>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection