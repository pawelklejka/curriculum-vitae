import React from 'react'

function AboutTabs(props) {
  return (
    <div className='about-tabs'>
        <button type='button' onClick={props.onTabClick} className={`tab-item ${props.active ? 'active' : ''}`} data-target="#education">Education</button>
        <button type='button' onClick={props.onTabClick} className={`tab-item ${props.active ? '' : 'active'}`} data-target="#experience">Experience</button>
    </div>
  )
}

export default AboutTabs