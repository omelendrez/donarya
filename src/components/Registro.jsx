import React from 'react'

const Registro = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos el email con otra persona.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Constrasena</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresar contrasena" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Repetir contrasena</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Ingresar contrasena" />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro