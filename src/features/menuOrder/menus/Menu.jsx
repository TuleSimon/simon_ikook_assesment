import React from 'react'
import './menu.css'
import MenuItem from './MenuItem'
import FilledButton3 from '../../../components/filledbutton/FilledButton3'

function Menu() {
  return (
    <div className='flex flex-col menu'>

    <h1 className='m-0'>Menus</h1>

    <div className='menugrid'>

    <MenuItem image="/food5.jpg"/>
    <MenuItem image="/food6.jpg"/>
    <MenuItem image="/food7.jpg"/>

    </div>

    <FilledButton3>View all menus (10)</FilledButton3>
      
    </div>
  )
}

export default Menu
