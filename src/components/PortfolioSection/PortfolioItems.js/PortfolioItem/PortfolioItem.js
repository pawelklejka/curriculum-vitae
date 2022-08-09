import React from 'react'
import PortfolioPopout from '../../PortfolioPopout/PortfolioPopout'
import gsap from 'gsap'
import usePopout from '../../usePopout'

const tl = gsap.timeline()



function PortfolioItem(props) {
  const {isShowing, toggle} = usePopout()
  
  const onClickOpenPopout = () => {
    tl
    .to(
      'html',
      {
        duration: 0,
        overflowY: 'hidden'
      }
    )
    .to(
      '#___gatsby',
      {
        duration: 0.2,
        opacity: 0,
      }
    )
    .then(toggle())
    
   }


  return (
    <>
        {isShowing ? 
                <div className='portfolio-item'>
                  <div className='portfolio-item-thumbnail'>
                      <img src={props.url} alt="facepots thumbnail" />
                  </div>
                  <h3 className='portfolio-item-title'>{props.title}</h3>
                  <button type='button' className='btn btn-secondary' onClick={onClickOpenPopout}>view project</button>
            
                </div>
      
          :
                <PortfolioPopout 
                url={props.url} 
                description={props.description} 
                date={props.date} 
                technologies={props.technologies} 
                role={props.role} isShowing={isShowing} hide={toggle}/>

        }



    </>
  )
    
    

}

export default PortfolioItem