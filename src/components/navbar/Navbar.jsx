import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import eye from '../../assets/eye-pixel.png'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#what'>Who is Gandalf?</a></p>
  <p><a href='#possibility'>LOTR</a></p>
  <p><a href='#features'>The Hobbits</a></p>
  <p><a href='#blog'>Quotes</a></p>
  </>
) 

 const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='company__navbar'>
        <div className='company__navbar-links'>
          <div className='company__navbar-links_logo'>
            <img src={eye} alt="logo"/>
          </div>
          <div className='company__navbar-links_container'>
           <Menu/>
          </div>
        </div>
        <div className='company__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='company__navbar-menu'>
          {toggleMenu 
           ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
           :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='company__navbar-menu_container scale-up-center'>
              <div className='company__navbar-menu-container-links'>
              <Menu/>
              <div className='company__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}
export default Navbar
