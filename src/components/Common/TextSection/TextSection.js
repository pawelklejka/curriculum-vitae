import { Link } from 'gatsby'
import React from 'react'

function TextSection() {
  return (
    <div className='home-text'>
        <p>Hello, I'm</p>
        <h1>Paweł Klejka</h1>
        <h2> Master of Computer Science, Software Developer, Graphic Designer</h2>
        <Link to='/about' className='btn btn-primary'>About Me</Link>
        <Link to='/portfolio' className='btn btn-secondary'>My Projects</Link>
    </div>
  )
}

export default TextSection