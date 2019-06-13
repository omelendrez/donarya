import React from 'react'

const Footer = (props) => {
  return (
    <div className="fixed-bottom text-center">
      <div className="container">
        <p className="lead small pt-2">&copy; 2019 - Donar Ya! - Todos los derechos reservados</p>
        {props.fullName}
      </div>
    </div>
  )
}

export default Footer