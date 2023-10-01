import ".Card.css"
import React from 'react'

function Card({name,image,value}) {
  return (
    <div className="container">
      <h2>{name}</h2>
      <img src= {image}/>
      <h5>{value}</h5>
        
      
    </div>
  )
}

export default Card
