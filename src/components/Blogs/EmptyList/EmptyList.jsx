import React from 'react'
import './EmptyList.css'
import img from '../../../images/empty.gif'
export default function EmptyList() {
  return (
    // <div className='col-md-7'>
    <div className='emptyList-wrap' >
        <img src={img} style={{height:'50%'}} alt="empty-search" />
        <br/>
        <br/>
    </div>
    // </div>
  )
}
