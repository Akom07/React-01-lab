import React from 'react'
import Programers from './Programers '
import '../App.css'
function Services(props) {
  return (
    <div className='services'>
        <span>{props.serves}</span>
        <span>{props.price}</span>
    <Programers
    {...props}
    />
    </div>
  )
}

export default Services