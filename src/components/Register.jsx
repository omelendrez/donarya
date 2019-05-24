import React from 'react'

const Register = () => {
  return (
    <div className="container">

      <form>
        <div className="form-row">
          <div className="col">
            <label htmlFor="inputNick">Nickname</label>
            <input type="text" className="form-control" placeholder="Sobrenombre" />
          </div>
          <div className="col">
            <label htmlFor="inputName">Name</label>
            <input type="text" className="form-control" placeholder="Nombre" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDni">DNI</label>
          <input type="text" className="form-control" id="inputDni" placeholder="Número de Documento" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Phone</label>
          <input type="text" className="form-control" id="inputPhone" placeholder="Número De Teléfono" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Adress</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Dirección De Email" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword">Password</label>
            <input type="email" className="form-control" id="inputPassword" placeholder="Contraseña" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputRetypepassword">Retype Password</label>
            <input type="Retypepassword" className="form-control" id="inputRetypepassword" placeholder="Reescribir Contraseña" />
          </div>

        </div>

        <button type="submit" className="btn btn-primary">Registrarse</button>

      </form>
    </div>
  )
}

export default Register