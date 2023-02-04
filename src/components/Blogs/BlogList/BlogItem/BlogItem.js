import React from 'react'
import Chip from '../../Chip/Chip'
import { Link } from 'react-router-dom'
import './BlogItem.css'
import img from '../../../../images/blog/blog1.png';

const BlogItemStyle = {
  blogItemWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  blogItemCover: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '20px',
    marginBottom: '0.5rem',
  },
  blogItemHeader: {
    margin: '0.5rem 0 1rem 0',
    flex: 1,
    fontSize:'14px'
  },
  
   blogItemDesc: {
    position: 'relative',
    maxHeight: '50px',
    overflow: 'hidden',
    paddingRight: '0.6rem',
    fontSize: '0.8rem',
    color: '#a9a9a9',
  }
}  

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
      <h5>{title}</h5>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          {/* <img src={authorAvatar} alt='avatar' /> */}
          <div>
            <p>{authorName} - <span>{createdAt}</span></p>
            
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
        Read More ➝
        </Link>
      </footer>
    </div>
  )
}
