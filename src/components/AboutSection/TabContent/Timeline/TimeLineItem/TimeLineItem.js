import React from 'react'

function TimeLineItem(props) {
  return (
    <div className='timeline-item'>
        <span className='date'>{props.date}</span>
        <h4>{props.title} <span>{props.place}</span></h4>
        <p>{props.description}</p>
    </div>
  )
}

export default TimeLineItem