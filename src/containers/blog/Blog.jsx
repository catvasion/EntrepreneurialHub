import React from 'react'
import './blog.css'
import {Article} from '../../components'
 const Blog = () => {
  return (
    <div className='company__blog section__padding' id="blog">
        <div className='company__blog-heading'>
          <h1 className='gradient__text'>Curious about the hobbits? Gandalf does like to blog!</h1>
        </div>
        <div className='company__blog-container'>
          <div className='company__blog-container_groupA'>
            <Article/>
          </div>
          <div className='company__blog-container'>
          <div className='company__blog-container_groupB'>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog
