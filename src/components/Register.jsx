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
    <div className="container col-12 col-sm-8 col-md-6 col-lg-4 mb-5 pb-5">
      <p className="my-4 display-4">Registrarse</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nombre completo</label>
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
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
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
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
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
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefono</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Ingresar numero de telefono"
            onChange={e => handleChange(e)}
            value={phoneNumber}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Domicilio</label>
          <textarea
            className="form-control"
            id="address"
            placeholder="Ingresar domicilio"
            onChange={e => handleChange(e)}
            value={address}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Ingresar email"
            onChange={e => handleChange(e)}
            value={email}
            required />
          <small id="emailHelp" className="form-text text-muted">Nunca compartiremos el email con otra persona.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Constraseña</label>
          <input
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe tener al menos una letra mayúscula, una minúscula, un número y al menos 8 caracteres en total"
            className="form-control"
            id="password1"
            placeholder="Ingresar contrasena"
            onChange={e => handleChange(e)}
            value={password1}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Repetir constraseña</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Ingresar contrasena de nuevo"
            onChange={e => handleChange(e)}
            value={password2}
            required />
        </div>
        {error && <div className="alert alert-danger" role="alert">
          Las contraseñas no coinciden. Vuelga a ingresarlas.
        </div>}
        {!error && <button type="submit" className="btn btn-lg btn-success btn-block mt-3">Registrarse</button>}
      </form>
    </div>
  )
}

export default Register