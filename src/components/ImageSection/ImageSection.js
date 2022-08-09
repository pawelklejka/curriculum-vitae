import React from 'react'
import CVImage from '../../assets/images/cv2.png'
import ReactSVG from '../../assets/svg/react-icon.svg'

function ImageSection(props) {
  return (
    <div className={props.type}>
        <div className='img-box'>

        <img src={CVImage} alt='CV image' className='gradient'/>
        <ReactSVG className="react-icon"/>
        </div>
    </div>
  )
}

export default ImageSection