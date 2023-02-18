import React from 'react'
import './EmptyList.css'
import img from '../../../images/empty.gif'
export default function EmptyList() {
  return (
    <div className='emptyList-wrap' >
        <img src={img} alt="empty-search" />
        <br/>
        <br/>
    </div>
  )
}
