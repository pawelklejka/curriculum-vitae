import React from 'react'
import ReactSVG from '../../../assets/svg/react-icon.svg'
import { StaticImage } from "gatsby-plugin-image"

function ImageSection(props) {
  return (
    <div className={props.type}>
        <div className='img-box'>
        <StaticImage src='../../../assets/images/cv2.png'   
        quality={100}  
        width={600}
        height={500}
        placeholder='blurred'
        imgClassName='gradient'
        alt='main-image'
        />
        <ReactSVG className="react-icon"/>
        </div>
    </div>
  )
}

export default ImageSection