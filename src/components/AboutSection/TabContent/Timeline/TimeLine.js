import React from 'react'
import TimeLineItem from './TimeLineItem/TimeLineItem'

function Timeline(props) {
  return (
    <div className='timeline'>
        {props.data.timeline.map(timelineItem => {
            return(
                <TimeLineItem key={timelineItem.title} date={timelineItem.date} title={timelineItem.title} place={timelineItem.place} description={timelineItem.description} />
            )
        })}
    </div>
  )
}

export default Timeline