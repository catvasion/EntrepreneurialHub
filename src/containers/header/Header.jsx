import React from 'react'
import './header.css'
import lotr from '../../assets/lotr-pixel.png'
import gandalf from '../../assets/gandalf-pixel_02.png'
import gandalfGif from '../../assets/gandalf-pixel_02.gif'
 const Header = () => {
  return (
    <div className='company__header section__padding' id='home'>
        <div className='company__header-content'>
          <h1 
          className='gradient__text'>
          {He wore a tall pointed blue hat, a long grey cloak, and a silver scarf.}</h1>
          <p>“All we have to decide is what to do with the time that is given us.”</p>
          <div className='company__header-content__input'>
            <input
              type="email"
              placeholder="Your Email Address">
            </input>
            <button
              type='button'>
            Get Started 
            </button>
          </div>
          <div className='company__header-content__people'>
            <img src={lotr} alt='people'/>
            <p>1,600 Hobbits requested access for a visit in the last 24 hours</p>
          </div>
        </div>  
        <div className='company__header-image'>
          <img src={gandalf} alt='gandalf' />
          <img src={gandalfGif} alt='gandalf moving'/>
        </div>
    </div>
  )
}
export default Header
