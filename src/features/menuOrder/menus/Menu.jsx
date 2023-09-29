import React from 'react'
import './menu.css'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className='flex flex-col menu'>

    <h1 className='m-0'>Menus</h1>

    <div className='menugrid'>

    <MenuItem image="/food5.jpg"/>
    <MenuItem image="/food6.jpg"/>
    <MenuItem image="/food7.jpg"/>

    </div>
      
    </div>
  )
}

export default Menu
