import React from 'react'
import './chefimage.css'
import CheckedIcon from '../../assets/icons/CheckedIcon'

function ChefImage({image}) {
  return (
    <div className='layout'>
        <img alt='chef_image' className='chef_image' src={image} width={50} height={50} />
        <CheckedIcon width={20} height={20} className="checked"/>
    </div>
  )
}

export default ChefImage
