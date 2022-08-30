import React from 'react'
import Skill from './Skill/Skill'

function Skills(props) {
  return (
    <>
        <p>{props.data.aboutDescription.aboutDescription}</p>
        <h3>skills:</h3>
        <div className='skills'>
            {props.skills.map(skill => {
                return(
                    <Skill key={skill.name} name={skill.name} />
                )
            })}
        </div>
    
    </>

  )
}

export default Skills