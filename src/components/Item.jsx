import React from 'react'
import './Item.scss'

const Item = ({ item }) => {
  const { title, quantity } = item
  return (
    <li className="list-group-item">
      <div className="item">
        <div className="field">{title}</div>
        <div className="field">{quantity}</div>
        <button className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  )
}

export default Item