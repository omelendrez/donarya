import React, { useState } from 'react'
import './DonarForm.scss'

const DonarForm = (props) => {
  const [form, setForm] = useState({
    title: '',
    quantity: 1
  })

  const handleChange = (e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  })

  const handleSave = (e => {
    e.preventDefault()
    props.handleSave(form)
  })

  return (
    <React.Fragment>
      <div className="form-group row">
        <div className="col-sm-9">
          <input
            type="text"
            pattern="[a-zA-Z 0-9]{3,}"
            title="Artículo"
            className="form-control"
            id="title"
            placeholder="Artículo"
            onChange={e => handleChange(e)}
            value={form.title}
            required />
        </div>
        <div className="col-sm-2">
          <input
            type="text"
            pattern="[0-9]{1,}"
            title="Cantidad"
            className="form-control"
            id="quantity"
            onChange={e => handleChange(e)}
            value={form.quantity}
            required />
        </div>

        <div className="col-sm-1">
          <button
            type="button"
            className="btn btn-success"
            onClick={e => handleSave(e)}
          >
            <i className="fas fa-save"></i>
          </button>
        </div>

      </div>
    </React.Fragment>
  )
}

export default DonarForm