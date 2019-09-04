import React from 'react'

export const Details = ({ record }) => {
  const { description, user, donation_items } = record
  if (!user) return null
  const { fullName, dni, cuit, phone, address } = user
  return (
    <React.Fragment>
      <div>{description}</div>
      <div>{fullName}</div>
      <div>{dni}</div>
      <div>{cuit}</div>
      <div>{phone}</div>
      <div>{address}</div>
      <ul>
        {donation_items.map(item => {
          return (<li>{item.title}</li>)
        })}
      </ul>
    </React.Fragment>
  )
}
