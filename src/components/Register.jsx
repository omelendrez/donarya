import React from 'react'

const Register = () => {
  return (
    <div className="container">
      <form>
      <div className="form-group">
          <label htmlFor="nickname">Apodo</label>
          <input type="name" className="form-control" id="nickname" placeholder="Ingresar apodo" />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="name" className="form-control" id="nombre" placeholder="Ingresar nombre" />
        </div>

        <div className="form-group">
          <label htmlFor="dni">Número de documento</label>
          <input type="number" className="form-control" id="dni"  placeholder="D.N.I." />
        </div>
        
        <div className="form-group">
          <label htmlFor="domicilio">Domicilio</label>
          <input type="address" className="form-control" id="domicilio" placeholder="Ingresar domicilio" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Repetir Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Contraseña" />
        </div>

        <button type="submit" className="btn btn-primary">Registrarse</button>

      </form>
    </div>
  )
}

export default Register