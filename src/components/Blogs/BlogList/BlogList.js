import React from 'react'
import BlogItem from './BlogItem/BlogItem'
import './BlogList.css'

export default function BlogList({blogs}) {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  )
}
