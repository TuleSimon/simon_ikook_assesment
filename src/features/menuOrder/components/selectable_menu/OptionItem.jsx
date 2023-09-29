import React from 'react'
import './selectable_menu.css'
import CheckedIconRect from '../../../../assets/icons/CheckedIconRect'
import UnCheckedIconRect from '../../../../assets/icons/UnCheckedIconRect'

function OptionItem({title, body, select, isChecked}) {
  return (
    <div  onClick={e => select(e)} className={`option ${isChecked && "active"}`}>

    {isChecked ? <CheckedIconRect className="icon" width={25} height={25}/> : <UnCheckedIconRect className="icon"  width={25} height={25}/>}

    <div  className='flex flex-col grow2'>
        {title && <p className='title'>{title}</p>}
        <p className='body'>{body}</p>
    </div>
      
    </div>
  )
}

export default OptionItem
