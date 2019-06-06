import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [form, updateForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    updateForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://donarya-be.herokuapp.com/api/auth', form)
      .then(res => console.log(res))
  }

  const { email, password } = form

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
              onChange={e => handleChange(e)}
              value={email}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="password">Contraseña</label>
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
              onChange={e => handleChange(e)}
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