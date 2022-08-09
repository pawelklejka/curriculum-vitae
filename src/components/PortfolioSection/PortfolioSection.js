import React from 'react'
import NeonBlobs from '../NeonBlobs/NeonBlobs'
import portfolioData from './PortfolioItems.js/portfolio-items.json'
import PortfolioItems from './PortfolioItems.js/PortfolioItems'

function PortfolioSection() {
  return (
    <section className='portfolio-section sec-padding'>
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