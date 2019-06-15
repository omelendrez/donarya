import React, { useState } from 'react'
// Para asociar qué página se muestra de acuerdo a la url usamos Switch y Route
// Switch es el condicional (si la url es x, el componente a ejecutar será y)
// Route permite asociar la url al componente
import { Route, Switch } from "react-router-dom";

// Componentes principales
import Header from './components/Header'
import Footer from './components/Footer'

// Componentes que cambian de acuerdo a la url
// Estos van dentro de Switch con un Route para cada uno
import Home from './components/Home'
import Donaciones from './components/Donaciones'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'

// Ponemos el componente Header (que es el menú de navegación) en el top de arriba de la patalla
// Luego creamos las rutas que react necesita para generar las páginas dentro de Switch
// Las rutas (Route) llevan el 'path' y el componente que se debe ejecutar para ese 'path'
// Al pie de la pantalla ponemos el Footer

const Routes = () => {
  const [fullName, setFullName] = useState('')

  return (
    <React.Fragment>
      <Header fullName={fullName} />
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/donaciones/" component={Donaciones} />
          <Route path="/login/" component={() => <Login setFullName={setFullName} />} />
          <Route path="/registrarse/" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Routes