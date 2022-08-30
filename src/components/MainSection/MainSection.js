import React, {useEffect} from 'react'
import ImageSection from '../Common/ImageSection/ImageSection'
import TextSection from '../Common/TextSection/TextSection'
import JavaSVG from '../../assets/svg/java.svg'
import NeonBlobs from '../Common/Decoration/NeonBlobs'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import gsap from 'gsap'

const tl = gsap.timeline()


const MainSection = (props) => {


  const animateSectionIn = () => {
    
    tl
    .from(
        '.home-section',
        {
            opacity: 0,
            duration: 0.3
        }
    )
  }
  const animateSectionOut = () => {
      tl.to(
          '.home-section',
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
    <>
      <main >
        <section className='home-section align-items-center'>
        <Header data={props.header} location={props.location} languages={props.languages}/>
        <JavaSVG className="java-icon"/>   
            <NeonBlobs />    
            <div className='container'>
              <div className='row align-items-center'>
                <TextSection data={props.data} location={props.location} languages={props.languages} />
                <ImageSection type="home-img"/>
              </div>
            </div>
        <Footer />
        </section>
    </main>
    </>
  )

}

export default MainSection