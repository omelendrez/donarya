import React, { useState } from 'react'

const Register = () => {

  // Inicializamos el estado para guardar lo que usuario ingresa en los respectivos inputs
  // Usamos el mismo ID que está definido en cada input para simplificar el código
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

  // La variable de estado 'error' nos servirá para activar/desactivar el mensaje de error al pie del formulario
  const [error, setError] = useState({ error: false, message: '' })

  const handleSubmit = (e) => {
    // El usuario ha dado click en el botón Registrarse
    e.preventDefault()
    if (password1 !== password2) {
      // Si las contraseñas no son iguales entonces activamos el mensaje de error
      setError({
        ...error,
        error: true,
        message: 'Las contraseñas no coinciden. Vuelva a ingresarlas.'
      })
      // Como hubo error, no continuamos, por eso usamos return (return termina la función acá)
      return
    }

    // Si no hubo error vamos a enviar la data al servidor de backend
    console.log(fullName, username, dni, phoneNumber, address, email, password1, password2)
  }

  const handleChange = (e => {
    // El usuario ha tipeado algo en algún campo del formulario

    // Limpiamos el mensaje de error que pueda haber quedado cuando el usuario intentó anteriormente enviar los datos (click en Registrar) con errores
    // Si hubo errores esta variable de estado 'errStatus' será igual a 'true' entonces la ponemos el 'false' y borramos el mensaje de error (message: '')
    if (errStatus) {
      setError({
        ...error,
        error: false,
        message: ''
      })
    }

    // Actualizamos el estado con el ID del input que se modificó y su nuevo valor
    updateForm({
      ...form,
      [e.target.id]: e.target.value
    })
  })
  // Usamos object destructuring para asignar las propiedades del objeto 'form' a variables
  const { fullName, username, dni, phoneNumber, address, email, password1, password2 } = form

  // Lo mismo con el objeto 'error', además aquí le damos nuevos nombres a la variables
  // Por ejemplo en el objeto 'error' la propiedad 'message' la asignamos a la variable 'errMsg'
  // que sería lo mismo que hacer lo siguiente:
  //      const errMsg = error.message

  const { message: errMsg, error: errStatus } = error

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
          {errStatus && <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>}
          {!errStatus && <button type="submit" className="btn btn-lg btn-success float-right">Registrarse</button>}
        </div>
      </form>
    </div >
  )
}

export default Register