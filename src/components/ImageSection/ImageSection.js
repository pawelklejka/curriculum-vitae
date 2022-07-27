import React from 'react'
import CVImage from '../../assets/images/cv.png'

function ImageSection() {
  return (
    <div className='home-img'>
        <div className='img-box'>

        <img src={CVImage} alt='CV image' className='gradient'/>

        </div>
    </div>
  )
}

export default ImageSection