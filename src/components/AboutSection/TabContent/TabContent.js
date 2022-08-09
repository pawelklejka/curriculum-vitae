import React from 'react'
import TimeLine from './Timeline/TimeLine'

function TabContent(props) {
  return (
    <div className={`tab-content ${props.active ? 'active' : ''}`}>
        <TimeLine data={props.data}/>
    </div>
  )
}

export default TabContent