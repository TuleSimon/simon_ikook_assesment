import React from 'react'
import style from './ImageGrid.module.css'

function ImagePopUp({image, onDismiss}) {
  return (
    <div onClick={e => {onDismiss()}} className={style.popup}>

        <img src={image} alt='' className={style.popupImage}/>
      
    </div>
  )
}

export default ImagePopUp
