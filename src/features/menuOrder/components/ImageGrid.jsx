import React from 'react'
import style from './ImageGrid.module.css'

function ImageGrid({onClick}) {

  function setImage(image){
    onClick(image)
  }

  return (
    <div className={`${style.grid}`}>

      <img src="/food1.jpg" alt='' onClick={e => setImage("/food1.jpg")} width={500} height={500} className={`${style.expandedImage} rounded ${style.animation}`} />
      <img src="/food2.jpg" alt='' onClick={e => setImage("/food2.jpg")} width={500} height={500} className={`${style.normalImage} rounded ${style.animation}`} />
      <img src="/food3.jpg" alt='' onClick={e => setImage("/food3.jpg")} width={500} height={500} className={`${style.normalImage} rounded ${style.animation}`}/>
      <img src="/food4.jpg" alt='' onClick={e => setImage("/food4.jpg")} width={500} height={500} className={`${style.normalImage} rounded ${style.animation}`}/>
      <img src="/food5.jpg" alt='' onClick={e => setImage("/food5.jpg")} width={500} height={500} className={`${style.normalImage} rounded ${style.animation}`}/>
      
    </div>
  )
}

export default ImageGrid
