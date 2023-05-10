import React from 'react'
import './feature.css'

 const Feature = ({ title, text }) => {
  return (
    <div className='company__features-container__feature'>
      <div className='company__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='company__features-container__feature-text'>
        <p>{text}</p>
      </div>
    </div>
    
  )
}
export default Feature

/**
 * --task types--
 * feature - when implementing or adding/creating new code
 * change or enhancement - when changing code
 * bugfix - when fixing a code issue
 * 
 * feature_01_add-feature-component
 * feature_01/add-feature-component
 * bugfix-01/fix-nav-styles
 * 
 * on commit messages:
 * 
 * git commit -m "[feature_01] Add base styles to component"
 * 
 * --on PR titles--
 * 
 * [feature_01] Add base styles to component
 */
