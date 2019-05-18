import React from 'react'
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="container text-center p-5">
      <h1 className="text-danger my-5">OOPS!</h1>
      <p className="lead my-5">La página que está buscando no existe</p>
      <Link className="btn btn-danger btn-sm" to="/">Volver a Home</Link>
    </div>
  )
}

export default Notfound