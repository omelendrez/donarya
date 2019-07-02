import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../services/api'

const Login = (props) => {
  const [form, updateForm] = useState({ email: '', password: '' })
  const [error, setError] = useState({ error: false, message: '' })
  const [processing, setProcessing] = useState(false)
  const [logged, setLogged] = useState(false)
  const [pwdType, setPwdType] = useState('password')

  useEffect(() => {
    props.setFullName('')
    setLogged(false)
  }, [])

  const showPassword = () => {
    if (pwdType === 'password') {
      setPwdType('text')
    } else {
      setPwdType('password')
    }
  }

  const handleChange = (e) => {
    updateForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true)
    API
      .post('/auth', form)
      .then((res) => {
        const { user, token } = res.data
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        setLogged(true)
        props.setFullName(user.fullName)
      })
      .catch(err => {
        setProcessing(false)
        const { data } = err.response
        setError({
          ...error,
          error: true,
          message: data.message
        })
      })
  }

  const { email, password } = form
  const { message: errMsg, error: errStatus } = error

  return (
    <React.Fragment>
      {logged && <Redirect to="/" />}
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
                type="text"
                className="form-control"
                id="email"
                placeholder="Usuario o Email"
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
                type={pwdType}
                className="form-control"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => handleChange(e)}
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="fas fa-eye" onClick={showPassword}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <button
              type="submit"
              disabled={processing}
              className="btn btn-lg btn-success btn-block mt-3"
            >Ingresar</button>
            {errStatus && <div className="alert alert-danger btn-block" role="alert">
              {errMsg}
            </div>}

          </div>

        </form>

      </div>
    </React.Fragment>
  )
}

export default Login