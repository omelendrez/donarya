import React, { useState } from 'react'

const Register = () => {
  const [nickname, setNickname] = useState('')
  const [nombre, setNombre] = useState('')
  const [dni, setDni] = useState('')
  const [domicilio, setDomicilio] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

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