/*eslint no-unused-vars: 0*/
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Importamos bootstrap y sus dependencias
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery' // Used by bootstrap
import Popper from 'popper.js' // Used by bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'

// Importamos fontawesome para usar los íconos
import '@fortawesome/fontawesome-free/css/all.css'

// Es obligatorio que todo lo que tenga que ver con navegación en react esté contenido dentro de un 'BrowserRouter'
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.register();
