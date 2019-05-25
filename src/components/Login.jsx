import React, { useState } from 'react'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }
  
  return (
    <div className="container mt-4 mb-5 pb-5">
      <h4 className="mb-4">Login</h4>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="email">Email {email}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresá tu email" />
          <small id="emailHelp" className="form-text text-muted">Nunca vamos a compartir tu email con nadie.</small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña {password}</label>
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
            className="btn btn-success btn-block offset-4 col-4 col-xs-12"
          >Ingresar</button>
        </div>

      </form>

    </div>
  )
}

export default Login