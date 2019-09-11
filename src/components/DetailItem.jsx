import React from 'react'

export const DetailItem = ({ item }) => {
  const { title, quantity } = item
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
    </tr>
  )
}