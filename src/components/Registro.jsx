import React from 'react'

const Registro = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="inputFullName">Nombre completo</label>
                    <input type="text" className="form-control" id="inputFullName" placeholder="Ingresar nombre completo" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputUsername">Usuario</label>
                    <input type="text" className="form-control" id="inputUsername" placeholder="Ingresar usuario" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputId">DNI</label>
                    <input type="number" className="form-control" id="inputId" placeholder="Ingresar numero de documento" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPhoneNumber">Telefono</label>
                    <input type="tel" className="form-control" id="inputPhoneNumber" placeholder="Ingresar numero de telefono" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Direccion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Ingresar direccion" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos el email con otra persona.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword1">Constrasena</label>
                    <input type="password" className="form-control" id="inputPassword1" placeholder="Ingresar contrasena" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword2">Repetir constrasena</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Ingresar contrasena de nuevo" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro