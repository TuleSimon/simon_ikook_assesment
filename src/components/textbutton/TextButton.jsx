import React from 'react'
import style from './textbutton.module.css'


function TextButton({children}) {
  return (
    <button className={style.textbutton}>
        {children}
    </button>
  )
}

export default TextButton
