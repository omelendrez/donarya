import React from 'react'

export const Details = ({ record, handleClose }) => {
  const { description, user, donation_items } = record
  if (!user) return null
  const { fullName, dni, cuit, phone, address, email } = user
  return (
    <React.Fragment>
      <div>{description}</div>
      <div>{fullName}</div>
      <div>{dni}</div>
      <div>{cuit}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <div>{email}</div>
      <ul>
        {donation_items.map(item => {
          return (<li key={item}>{item.title}</li>)
        })}
      </ul>
      <button className="btn btn-danger" onClick={() => handleClose()}>Cerrar</button>
    </React.Fragment>
  )
}
