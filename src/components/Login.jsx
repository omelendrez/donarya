import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="container col-xs-10 col-sm-8 col-md-6 col-lg-4 mb-5">

      <p className="my-4 display-4">Login</p>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresá tu email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresá tu contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-row">
          <button
            type="submit"
            className="btn btn-lg btn-success btn-block mt-3"
          >Ingresar</button>
        </div>

      </form>

    </div>
  )
}

export default Login