import React, { useState } from 'react'
import API from '../services/api'

const Donar = () => {

  const [description, setDescription] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState({ error: false, message: '' })
  const { message: errMsg, error: errStatus } = error

  const handleChange = (e) => {
    const value = e.target.value
    setDescription(value)
    if (errStatus) {
      setError({
        ...error,
        error: false,
        message: ''
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setProcessing(true)

    const user = JSON.parse(localStorage.getItem('user'))

    const payload = {
      description,
      userId: user.id
    }

    API
      .post('/donations', payload)
      .then(() => setProcessing(false))
      .catch(err => {
        const { data } = err.response
        setError({
          ...error,
          error: true,
          message: data.message
        })
        setProcessing(false)
      })
  }

  return (
    <div className="container mb-5 pb-5">
      <p className="my-4 display-4">Donación</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-3 col-form-label">Descripción</label>
          <div className="col-sm-9">
            <input
              type="text"
              pattern="[a-zA-Z ]{8,}"
              title="Descripción debe tener mínimo 8 caracteres"
              className="form-control"
              id="description"
              placeholder="Ingresar descripción de la donación"
              onChange={e => handleChange(e)}
              value={description}
              required />
          </div>
        </div>
        <div className="mb-5">
          {errStatus && <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>}
          {!errStatus && <button type="submit" disabled={processing} className="btn btn-lg btn-success float-right">Enviar donación</button>}
        </div>
      </form>
    </div>
  )
}

export default Donar