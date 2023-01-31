import React from 'react'

const chipStyle= {
  chip: {
    fontSize: '0.7rem',
    background: 'linear-gradient(to right, #D49733, #cca25e)',
    color: '#fff',
    padding: '0.3rem 0.5rem',
    borderRadius: '5px',
    width: 'fit-content',
    textTransform: 'capitalize',
  }
}

export default function Chip({label}) {
  return (
    <p className='chip' style={chipStyle.chip} >{label}</p>
  )
}
