import React from 'react'

const HomeCards = ({image,title,color}) => {
  return (
    <div className='homeCards' style={{background:`${color}`}}>
      <img className='homeCardImage' src={image} alt={title} /> 
      <p className='desc' > {title} </p>
    </div>
  )
}

export default HomeCards