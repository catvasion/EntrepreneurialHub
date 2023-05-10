import React from 'react'
import './what.css'
import Feature from '../../components/feature/Feature'

 const What = () => {
  return (
    <div className='company__what section__margin id="what'>
      <div className='company__what-feature'>
        <Feature 
        title="Who is Gandalf"
        text="Gandalf is a wizard and he has an awesome horse named Shadowfax!"/>
      </div>
      <div className='company__what-heading'>
        <h1 className='gradient__text'>“It's the job that's never started as takes longest to finish.”</h1>
        <p>“Even the smallest person can change the course of the future.”</p>
      </div>
      <div className='company__what-container'>
          <Feature title="Shadowfax" text="The Lord of all horses."/>
          <Feature title="Olórin" text="Gandalf was named by the ancients of Middle Earth"/>
          <Feature title="The staff" text="His walking stick helps him weild magic"/>
      </div>
    </div>
  )
}
export default What