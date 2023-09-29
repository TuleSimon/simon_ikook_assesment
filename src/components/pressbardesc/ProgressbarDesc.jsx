import React from 'react'
import './progressbar.css'

function ProgressbarDesc({height,width=0,title,value}) {
  return (
    <div className='root'>
    <p className='textMedium' style={{minWidth:"120px"}}>{title}</p>
    <div style={{height:height}} className='progressbar'>

    <div className='progress'  style={{width:`${width}%`,}}/>
      
    </div>
    <p className='textMedium'>{value}</p>
    </div>
  )
}

export default ProgressbarDesc
