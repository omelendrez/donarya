import React from 'react'

const Login = () => {
  return (
    <div className="container">
      <form>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contraseña" />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>

      </form>
    </div>
  )
}

export default Login