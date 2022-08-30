import React from 'react'
import ReactHowler from 'react-howler'

export default ({element}) => {

    return  (


    <>
    
    <ReactHowler src={'/static/audio/music.ogg'} playing={true} volume={0.3} loop={true} />
    {element}
    
    </>


    )


}