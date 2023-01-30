import React from 'react'
import Chip from '../../Chip/Chip'
import { Link } from 'react-router-dom'
import './BlogItem.css'
import img from '../../../../images/blog/blog1.png';
export default function BlogItem({
    blog: {
        description,
        title,
        createdAt,
        authorName,
        authorAvatar,
        cover,
        category,
        id,
    },
}) {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={img} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝Next
        </Link>
      </footer>
    </div>
  )
}
