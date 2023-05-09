import React from 'react'
import './what.css'
import {Feature} from '../../components'

 const What = () => {
  return (
    <div className='company__what section__margin id="what'>
      <div className='company__what-feature'>
        <Feature />
      </div>
      <div className='company__what-heading'>
        <h1 className='gradient__text'>“It's the job that's never started as takes longest to finish.”</h1>
        <p>“Even the smallest person can change the course of the future.”</p>
      </div>
      <div className='company__what-container'>
          <Feature/>
          <Feature/>
          <Feature/>
      </div>
    </div>
  )
}
export default What