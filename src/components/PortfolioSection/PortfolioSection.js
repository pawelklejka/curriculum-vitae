import React, {useEffect} from 'react'
import Header from '../Common/Header/Header'
import NeonBlobs from '../Common/Decoration/NeonBlobs'
import portfolioData from './PortfolioItems.js/portfolio-items.json'
import PortfolioItems from './PortfolioItems.js/PortfolioItems'
import gsap from 'gsap'

const tl = gsap.timeline()


function PortfolioSection() {

    const animateSectionIn = () => {
        tl.from(
            '.portfolio-section',
            {
                opacity: 0,
                duration: 0.3
            }
        )
      }
      const animateSectionOut = () => {
          tl.to(
              '.portfolio-section',
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
      })

  return (
    <section className='portfolio-section section-padding'>
        <Header />
        <NeonBlobs />
        <div className='container'>
            <div className='row'>
                <div className='section-title'>
                    <h2>recent projects</h2>
                </div>
            </div>
            <div className='row'>
                <PortfolioItems data={portfolioData}/>
            </div>
        </div>
    </section>
  )
}

export default PortfolioSection