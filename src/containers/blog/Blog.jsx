import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports.js'
 const Blog = () => {
  return (
    <div className='company__blog section__padding' id="blog">
        <div className='company__blog-heading'>
          <h1 className='gradient__text'>Check out our hobbit blog "The Shire Times"</h1>
        </div>
        <div className='company__blog-container'>
          <div className='company__blog-container_groupA'>
            <Article imgUrl={blog01} date="the First Age" title="The Fellowship of the Ring"/>
          </div>
          
          <div className='company__blog-container_groupB'>
            <Article imgUrl={blog02} date="the First Age" title="The Fellowship of the Ring"/>
            <Article imgUrl={blog03} date="the First Age" title="The Fellowship of the Ring"/>
            <Article imgUrl={blog04} date="the First Age" title="The Fellowship of the Ring"/>
            <Article imgUrl={blog05} date="the First Age" title="The Fellowship of the Ring"/>
          </div>
      </div>
    </div>
  )
}
export default Blog
