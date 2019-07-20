import React from 'react'
import Item from './Item'

const DonarList = ({ items }) => {
  return (
    <ul className="list-group my-1">
      {items.map((item, index) => <Item key={index} item={item} />)}
    </ul>
  )
}

export default DonarList