import React from 'react'

const IntegratedServicesCard = ({img,title,techProp,details,color}) => {
  const tech = techProp.techData
  return (
    <div className={`integratedServiceCards ${color}`}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      {
        tech.map((e,i) => (
          <li key={i} >{e}</li>
        ))
      }
      <p className="desc">{details}</p>
    </div>
  )
}

export default IntegratedServicesCard