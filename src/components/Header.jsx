import React from "react";
import { NavLink } from "react-router-dom";
// Acá vamos a usar los estilos de bootstrap para crear la barra de navegación
// Usamos 'Link' para crear los links (equivale a: <a href='/'>Home</a>)
const Header = props => {
  const { fullName } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <NavLink className="navbar-brand" to="/">
        Donar Ya!
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li
            className="nav-item active"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          {fullName && (
            <React.Fragment>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <NavLink className="nav-link" to="/donaciones">
                  Donaciones
                </NavLink>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <NavLink className="nav-link" to="/donar">
                  Donar
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>

        {fullName && (
          <React.Fragment>
            <span className="mr-4">{fullName}</span>
            <NavLink to="/login" title="Logout">
              <i className="fas fa-sign-out-alt"></i>
            </NavLink>
          </React.Fragment>
        )}
        {!fullName && (
          <ul className="nav navbar-nav navbar-right">
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/registrarse">
                Registrarse
              </NavLink>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
