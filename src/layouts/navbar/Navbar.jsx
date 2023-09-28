import React from 'react'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={style.NavbarStyle}>
   <img src='/logo.png' alt='logo' className={style.NavbarLogo}/>
   <section className={style.linksSection}>

   </section>
      This is a navbar
    </nav>
  )
}

export default Navbar
