import React from 'react'
import './menu.css'
import FilledButton3 from '../../../components/filledbutton/FilledButton3'
import SaveIcon from '../../../assets/icons/SaveIcon'

function MenuItem({image}) {
  return (
    <div className='menuitem'>

    <img src={image} className='image' alt='image'/>

    <div className='content'>

    <div className='flex between w-full'>

    <FilledButton3 custom="customFilledButton">Italian</FilledButton3>
    <SaveIcon width={35} height={35} color="white"/>

    </div>

    <div className='flex between w-full'>
    <p className='textMedium' style={{color:"white"}}>Grilled Barbecue Dishes</p>
    <p className='colorPrimary textMedium m-0 '> €20pp </p>
    </div>

    </div>
      
    </div>
  )
}

export default MenuItem
