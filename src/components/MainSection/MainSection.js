import React from 'react'
import ImageSection from '../ImageSection/ImageSection'
import TextSection from '../TextSection/TextSection'
import JavaSVG from '../../assets/svg/java.svg'
import NeonBlobs from '../NeonBlobs/NeonBlobs'

const GlassBoard = () => {
  return (
    <>
      <main>

        <section className='home-section align-items-center hidden'>
        <JavaSVG className="java-icon"/>   
            <NeonBlobs />    
            <div className='container'>
              <div className='row align-items-center'>
                <TextSection />
                <ImageSection type="home-img"/>
              </div>
            </div>
        </section>
    </main>
    </>
  )

}

export default GlassBoard