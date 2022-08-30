import { Link } from 'gatsby'
import React, {useEffect} from 'react'
import gsap from 'gsap'

const tl = gsap.timeline()

function ChooseLanguage(props) {

    
    const onClickPolish = () => {
      props.toggle()
      localStorage.setItem('LANGUAGE', 'pl')
    }

    const onClickEnglish = () => {
      props.toggle()
      localStorage.setItem('LANGUAGE', 'en-US')
    }

  return (
    <div className='language-group'>
        <Link to={'/pl'} className='btn btn-primary' onClick={onClickPolish}>Polski</Link>
        <button className='btn btn-secondary' onClick={onClickEnglish}>English</button>
    </div>
  )
}

export default ChooseLanguage