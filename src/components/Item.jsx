import React from 'react'
import "./Item.scss"

const Item = ({ item, onDelete }) => {
  const { title, quantity } = item
  const handleDelete = (e => {
    e.preventDefault()
    onDelete(item)
  })
  return (
    <li>
      <div className="row item">
        <div className="col-sm-9">{title}</div>
        <div className="col-sm-2">{quantity}</div>
        <div className="col-sm-1">
          <button
            type="button"
            className="btn btn-danger"
            onClick={e => handleDelete(e)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </li>
  )
}

export default Item