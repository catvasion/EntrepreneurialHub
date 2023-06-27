import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports.js'
 const Blog = () => {
  return (
    <div className='company__blog section__padding' id="blog">
        <div className='company__blog-heading'>
          <h1 className='gradient__text'>Check out our hobbit blog "The Shire Chronicles."</h1>
        </div>
        <div className='company__blog-container'>
          <div className='company__blog-container_groupA'>
          <Article imgUrl={blog01} date="The Third Age" title="Unveiling the Secrets of the One Ring" />
          </div>
          
          <div className='company__blog-container_groupB'>
            <Article imgUrl={blog02} date="The Third Age" title="A Journey Through Rivendell: Beauty and Wisdom" />
            <Article imgUrl={blog03} date="The Third Age" title="Hobbits' Delight: A Culinary Adventure in the Shire" />
            <Article imgUrl={blog04} date="The Third Age" title="The Valiant Rohirrim: Defenders of the Mark" />
            <Article imgUrl={blog05} date="The Third Age" title="The Mysteries of Lothlórien: Dwelling of the Elves" />
          </div>
      </div>
    </div>
  )
}
export default Blog
