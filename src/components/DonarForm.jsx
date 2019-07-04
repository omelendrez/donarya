import React, { useState } from 'react'

const DonarForm = () => {
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

  return (
    <React.Fragment>
      <div className="form-group row">
        <div className="col-sm-9">
          <input
            type="text"
            pattern="[a-zA-Z 0-9]{3,}"
            title="Artículo a donar"
            className="form-control"
            id="title"
            placeholder="Ingresar el artículo a donar"
            onChange={e => handleChange(e)}
            value={form.title}
            required />
        </div>
        <div className="col-sm-3">
          <input
            type="text"
            pattern="[0-9]{1,}"
            title="Ingrese la cantidad del artículo"
            className="form-control"
            id="quantity"
            onChange={e => handleChange(e)}
            value={form.quantity}
            required />
        </div>
      </div>
    </React.Fragment>
  )
}

export default DonarForm