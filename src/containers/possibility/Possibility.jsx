import React from 'react'
import './possibility.css'
import tree from '../../assets/gondor-tree.png'
 const Possibility = () => {
  return (
    <div className='container__possibility section__padding' id='possibility'>
      <div className='company__possibility-image'>
        <img src={tree} alt='tree of gondor'/>
      </div> 
      <div company__possibilty-content>
        <h4> Gondor survived to the end of the Third Age</h4>
        <h1 className='gradient-text'>The greatest realm of Men in the west of Middle-earth.</h1>
        <p>The city of kings!</p>
        <h4>Request a letter from Gondor.</h4>
      </div>
    </div>
  )
}
export default Possibility