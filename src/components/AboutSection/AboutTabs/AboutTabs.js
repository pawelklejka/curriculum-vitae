import React from 'react'

function AboutTabs(props) {
  return (
    <div className='about-tabs'>
        <button type='button' onClick={props.onTabClick} className={`tab-item ${props.active ? 'active' : ''}`} data-target="#education">{props.data.educationTabBtn}</button>
        <button type='button' onClick={props.onTabClick} className={`tab-item ${props.active ? '' : 'active'}`} data-target="#experience">{props.data.experienceTabBtn}</button>
    </div>
  )
}

export default AboutTabs