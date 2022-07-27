import React from 'react'
import ImageSection from '../ImageSection/ImageSection'
import TextSection from '../TextSection/TextSection'
import JavaSVG from '../../assets/svg/java.svg'
const GlassBoard = () => {
  return (
    <>
      <main>    
        <JavaSVG className="java-icon"/>   
        <section className='home-section align-items-center'>
            <div className='container'>
              <div className='row align-items-center'>
                <TextSection />
                <ImageSection />
              </div>
            </div>
        </section>
    </main>
    </>
  )

}

export default GlassBoard