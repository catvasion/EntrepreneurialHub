import React from 'react'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

import './navbar.css'
 const Navbar = () => {
  return (
    <div className='company__navbar'>
        <div className='company__navbar-links'>
          <div className='company__navbar-links_logo'>
            <img src={logo} alt="logo"/>
          </div>
        </div>
    </div>
  )
}
export default Navbar
