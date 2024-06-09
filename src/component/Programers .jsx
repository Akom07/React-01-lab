import React from 'react'

function Programers (props) {
  return (
    <div className='programers ' style={{backgroundColor:props.companyName == 'tuwaiq'? 'violet':'none'}}>
        <h1 className='fName'>{props.name1}</h1>
        <ul>
           <li>{props.lang}</li>
        </ul>
        <h2>{props.years}</h2>
        <h2>{props.company}</h2>

    </div>
  )
}

export default Programers 