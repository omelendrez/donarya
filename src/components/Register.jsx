import React, { useState } from 'react'

const Register = () => {

  const [form, updateForm] = useState({
    fullName: '',
    username: '',
    dni: '',
    phoneNumber: '',
    address: '',
    email: '',
    password1: '',
    password2: ''
  })

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password1 !== password2) {
      setError(true)
      return
    }
    console.log(fullName, username, dni, phoneNumber, address, email, password1, password2)
  }

  const handleChange = (e => {
    setError(false)
    updateForm({
      ...form,
      [e.target.id]: e.target.value
    })
  })

  const { fullName, username, dni, phoneNumber, address, email, password1, password2 } = form

  return (
    <div className="container mb-5 pb-5">
      <p className="my-4 display-4">Registrarse</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="fullName" className="col-sm-3 col-form-label">Nombre completo</label>
          <div className="col-sm-9">
            <input
              type="text"
              pattern="[a-zA-Z ]{8,}"
              title="Nombre completo debe tener mínimo 8 caracteres"
              className="form-control"
              id="fullName"
              placeholder="Ingresar nombre completo"
              onChange={e => handleChange(e)}
              value={fullName}
              required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-3 col-form-label">Usuario</label>
          <div className="col-sm-9">
            <input
              type="text"
              pattern="[a-zA-Z0-9]{8,15}"
              maxLength="15"
              title="Usuario debe tener entre 8 y 15 caracteres y/o números"
              className="form-control"
              id="username"
              placeholder="Ingresar usuario"
              onChange={e => handleChange(e)}
              value={username}
              required />
            <small id="emailUsername" className="form-text text-muted">Debe tener entre 8 y 15 caracteres y/o números</small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="dni" className="col-sm-3 col-form-label">DNI</label>
          <div className="col-sm-9">
            <input
              type="text"
              pattern="[0-9]{8}"
              title="DNI debe tener 8 números"
              maxLength="8"
              className="form-control"
              id="dni"
              placeholder="Ingresar numero de documento"
              onChange={e => handleChange(e)}
              value={dni}
              required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">Telefono</label>
          <div className="col-sm-9">
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Ingresar numero de telefono"
              onChange={e => handleChange(e)}
              value={phoneNumber}
              required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Ingresar email"
              onChange={e => handleChange(e)}
              value={email}
              required />
            <small id="emailHelp" className="form-text text-muted">Nunca compartiremos la dirección de email</small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-3 col-form-label">Domicilio</label>
          <div className="col-sm-9">
            <textarea
              className="form-control"
              id="address"
              placeholder="Ingresar domicilio"
              onChange={e => handleChange(e)}
              rows="3"
              value={address}
              required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password1" className="col-sm-3 col-form-label">Constraseña</label>
          <div className="col-sm-9">
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Debe tener al menos una letra mayúscula, una minúscula, un número y al menos 8 caracteres en total"
              aria-describedby="passwordHelp"
              className="form-control"
              id="password1"
              placeholder="Ingresar contrasena"
              onChange={e => handleChange(e)}
              value={password1}
              required />
            <small id="passwordHelp" className="form-text text-muted">Debe tener al menos una letra mayúscula, una minúscula, un número y al menos 8 caracteres de longitud</small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password2" className="col-sm-3 col-form-label">Repetir constraseña</label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Ingresar contrasena de nuevo"
              onChange={e => handleChange(e)}
              value={password2}
              required />
          </div>
        </div>
        <div className="mb-5">
          {error && <div className="alert alert-danger" role="alert">
            Las contraseñas no coinciden. Vuelva a ingresarlas.
        </div>}
          {!error && <button type="submit" className="btn btn-lg btn-success float-right">Registrarse</button>}
        </div>
      </form>
    </div >
  )
}

export default Register