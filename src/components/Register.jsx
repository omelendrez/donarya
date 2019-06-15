import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../services/api'

const Register = () => {

  // Inicializamos el estado para guardar lo que el usuario ingresa en los respectivos inputs
  // Usamos el mismo ID que está definido en cada input para simplificar el código
  const [form, updateForm] = useState({
    fullName: '',
    username: '',
    dni: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    password2: ''
  })

  const [registered, setRegistered] = useState(false)
  const [processing, setProcessing] = useState(false)

  // La variable de estado 'error' nos servirá para activar/desactivar el mensaje de error al pie del formulario
  const [error, setError] = useState({ error: false, message: '' })

  const handleSubmit = (e) => {
    // El usuario ha dado click en el botón Registrarse
    e.preventDefault()
    if (password !== password2) {
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
    setProcessing(true)

    API
      .post('/users', form)
      .then(() => setRegistered(true))
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
  const { fullName, username, dni, phone, address, email, password, password2 } = form

  // Lo mismo con el objeto 'error', además aquí le damos nuevos nombres a la variables
  // Por ejemplo en el objeto 'error' la propiedad 'message' la asignamos a la variable 'errMsg'
  // que sería lo mismo que hacer lo siguiente:
  //      const errMsg = error.message
  const { message: errMsg, error: errStatus } = error

  return (
    <React.Fragment>
      {registered && <Redirect to="/login" />}

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
            <label htmlFor="phone" className="col-sm-3 col-form-label">Telefono</label>
            <div className="col-sm-9">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Ingresar numero de telefono"
                onChange={e => handleChange(e)}
                value={phone}
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
            <label htmlFor="password" className="col-sm-3 col-form-label">Constraseña</label>
            <div className="col-sm-9">
              <input
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Debe tener al menos una letra mayúscula, una minúscula, un número y al menos 8 caracteres en total"
                aria-describedby="passwordHelp"
                className="form-control"
                id="password"
                placeholder="Ingresar contrasena"
                onChange={e => handleChange(e)}
                value={password}
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
            {!errStatus && <button type="submit" disabled={processing} className="btn btn-lg btn-success float-right">Registrarse</button>}
          </div>
        </form>
      </div >
    </React.Fragment>
  )
}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nickname, nombre, dni, domicilio, email, password1, password2)
  }
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nickname">Apodo</label>
            <input type="name" className="form-control" onChange={e => setNickname(e.target.value)}
              value={nickname} id="nickname" placeholder="Ingresar apodo" />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="name" className="form-control" onChange={e => setNombre(e.target.value)}
              value={nombre} id="nombre" placeholder="Ingresar nombre" />
          </div>

          <div className="form-group">
            <label htmlFor="dni">Número de documento</label>
            <input type="number" className="form-control" onChange={e => setDni(e.target.value)}
              value={dni} id="dni" placeholder="D.N.I." />
          </div>

          <div className="form-group">
            <label htmlFor="domicilio">Domicilio</label>
            <input type="address" className="form-control" onChange={e => setDomicilio(e.target.value)}
              value={domicilio} id="domicilio" placeholder="Ingresar domicilio" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" onChange={e => setEmail(e.target.value)}
              value={email} id="email" aria-describedby="emailHelp" placeholder="Ingresar email" />
          </div>

          <div className="form-group">
            <label htmlFor="password1">Contraseña</label>
            <input type="password" className="form-control" onChange={e => setPassword1(e.target.value)}
              value={password1} id="password1" placeholder="Contraseña" />
          </div>

          <div className="form-group">
            <label htmlFor="password2">Repetir Contraseña</label>
            <input type="password" className="form-control" onChange={e => setPassword2(e.target.value)}
              value={password2} id="password2" placeholder="Contraseña" />
          </div>

          <button type="submit" className="btn btn-primary">Registrarse</button>

        </form>
      </div>
    )
  }

  export default Register