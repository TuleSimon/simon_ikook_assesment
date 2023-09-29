import React from 'react'
import './leftsection.css'

function Progressbar({height,width=0}) {
  return (
    <div style={{height:height}} className='progressbar'>

    <div className='progress'  style={{width:`${width}%`, backgroundColor:(width>=100? "red":"black")}}/>
      
    </div>
  )
}

export default Progressbar
