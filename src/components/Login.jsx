import React from 'react'

const Login = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos el email con otra persona.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword1">Constrasena</label>
                    <input type="password" className="form-control" id="inputPassword1" placeholder="Ingresar contrasena" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login