import React from "react"
import { Link } from "react-router-dom";
// Acá vamos a usar los estilos de bootstrap para crear la barra de navegación
// Usamos 'Link' para crear los links (equivale a: <a href='/'>Home</a>)
const Header = (props) => {
  const { fullName } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">

      <Link className="navbar-brand" to="/">Donar Ya!</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show" >
            <Link className="nav-link" to="/">Home</Link>
          </li>
          {fullName &&
            <React.Fragment>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
                <Link className="nav-link" to="/donaciones">Donaciones</Link>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
                <Link className="nav-link" to="/donar">Donar</Link>
              </li>
            </React.Fragment>
          }
        </ul>

        {fullName &&
          <React.Fragment>
            <span className="mr-4">{fullName}</span>
            <Link to="/login" title='Logout'><i className="fas fa-sign-out-alt"></i></Link>
          </React.Fragment>
        }
        {!fullName &&
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
              <Link className="nav-link" to="/registrarse">Registrarse</Link>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show" >
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        }
      </div>
    </nav>
  )
}

export default Header
