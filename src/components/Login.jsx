import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="container col-12 col-sm-8 col-md-6 col-lg-4 mb-5">

      <p className="my-4 display-4">Login</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="email">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="password">contraseña</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-key"></i>
              </div>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
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