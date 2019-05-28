import React, { useState } from 'react'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [id, setId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fullName, username, id, phoneNumber, address, email, password1, password2)
  }

  return (
    <div className="container col-12 col-sm-8 col-md-6 col-lg-4 mb-5">
      <p className="my-4 display-4">Registrarse</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nombre completo</label>
          <input type="text" className="form-control" id="fullName" placeholder="Ingresar nombre completo" onChange={e => setFullName(e.target.value)} value={fullName} required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" className="form-control" id="username" placeholder="Ingresar usuario" onChange={e => setUsername(e.target.value)} value={username} required />
        </div>
        <div className="form-group">
          <label htmlFor="id">DNI</label>
          <input type="number" className="form-control" id="id" placeholder="Ingresar numero de documento" onChange={e => setId(e.target.value)} value={id} required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefono</label>
          <input type="tel" className="form-control" id="phoneNumber" placeholder="Ingresar numero de telefono" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Domicilio</label>
          <input type="text" className="form-control" id="address" placeholder="Ingresar domicilio" onChange={e => setAddress(e.target.value)} value={address} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresar email" onChange={e => setEmail(e.target.value)} value={email} required />
          <small id="emailHelp" className="form-text text-muted">Nunca compartiremos el email con otra persona.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password1">Constrasena</label>
          <input type="password" className="form-control" id="password1" placeholder="Ingresar contrasena" onChange={e => setPassword1(e.target.value)} value={password1} required />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Repetir constrasena</label>
          <input type="password" className="form-control" id="password2" placeholder="Ingresar contrasena de nuevo" onChange={e => setPassword2(e.target.value)} value={password2} required />
        </div>
        <button type="submit" className="btn btn-lg btn-success btn-block mt-3">Registrarse</button>
      </form>
    </div>
  )
}

export default Register