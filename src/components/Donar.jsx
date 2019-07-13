import React, { useState, useEffect } from 'react'
import API from '../services/api'
import DonarForm from './DonarForm'
import Item from './Item'
import './Donar.scss'

const Donar = () => {

  const [description, setDescription] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState({ error: false, message: '' })
  const [isAdding, setIsAdding] = useState(false)
  const [items, setItems] = useState([])
  const [saved, setSaved] = useState(true)

  const { message: errMsg, error: errStatus } = error

  useEffect(() => {
    setSaved(false)
    // eslint-disable-next-line
  }, [])

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

    if (!items.length) {
      setError({
        ...error,
        error: true,
        message: 'Debe cargar al menos un artículo a la donación - Haga en el botón azul '
      })
      return
    }

    setProcessing(true)

    const user = JSON.parse(localStorage.getItem('user'))

    const payload = {
      description,
      userId: user.id,
      items
    }

    API
      .post('/donations', payload)
      .then(data => {
        setProcessing(false)
        setSaved(true)
      })
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

  const handleAdd = (e) => {
    e.preventDefault()
    setError({
      ...error,
      error: false,
      message: ''
    })
    setIsAdding(true)
  }

  const handleSave = (item) => {
    if (!item.title.length) {
      setError({
        ...error,
        error: true,
        message: 'Debe ingresar el artículo'
      })
      return
    }

    if (item.quantity < 1) {
      setError({
        ...error,
        error: true,
        message: 'Debe ingresar la cantidad'
      })
      return
    }

    if (items.find(it => it.title === item.title)) {
      setError({
        ...error,
        error: true,
        message: `Ya existe artículo ${item.title} en la lista`
      })
      return
    }

    setError({
      ...error,
      error: false,
      message: ''
    })

    setItems([
      ...items,
      item
    ])
    setIsAdding(false)
  }

  return (
    <div className="container mb-5 pb-5">
      <p className="my-4 display-4">Donación</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          {!saved && <div className="col-sm-12  my-1">
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
          }
          {!saved &&
            <div className="col-sm-6 my-1">
              <ul className="list-group my-1">
                {items.map((item, index) => <Item key={index} item={item} />)}
              </ul>
              {isAdding &&
                <div className="my-1">
                  <DonarForm handleSave={handleSave} />
                </div>
              }
              {!isAdding &&
                <button
                  type="button"
                  className="btn btn-primary float-right  my-1"
                  onClick={e => handleAdd(e)}
                >
                  <i className="fas fa-plus"></i> Agregar artículo
              </button>
              }
            </div>
          }
          <div className="col-sm-12 my-1">
            {errStatus && <div className="alert alert-danger" role="alert">
              {errMsg}
            </div>}
            {!errStatus && <button type="submit" disabled={processing} className="btn btn-lg btn-success float-right">Enviar donación</button>}
            {saved && <div className="alert alert-success" role="alert">Donación enviada. Muchas gracias por su generosidad!</div>}
          </div>
        </div>
      </form>
    </div >
  )
}

export default Donar