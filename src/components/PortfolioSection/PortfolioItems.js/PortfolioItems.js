import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'

function PortfolioItems(props) {
  return (
    <>
    {props.data.map((item, index)=> {
      return(
        <PortfolioItem key={index} url={item.url} title={item.title} description={item.description} date={item.date} technologies={item.technologies} role={item.technologies}/>
      )
    })}
    
    </>
  )
}

export default PortfolioItems