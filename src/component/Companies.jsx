import React from 'react'
import Services from './Services'
import '../App.css'
function Companies(props) {
  return (
    <div className='companies'>
        <h1 className='fName'>{props.companyName}</h1>
        <span>{props.emploeeNumber}</span>
        <span>{props.fondYear}</span>
        <Services
        {...props}
        
        
        />
    </div>
  )
}

export default Companies