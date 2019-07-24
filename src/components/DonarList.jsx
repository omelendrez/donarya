import React from 'react'
import Item from './Item'

const DonarList = ({ items, onDelete }) => {
  return (
    <ul className="list-group my-1">
      {items.map((item, index) => <Item key={index} onDelete={onDelete} item={item} />)}
    </ul>
  )
}

export default DonarList