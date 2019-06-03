/*eslint no-unused-vars: 0*/
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Importamos bootstrap y sus dependencias
import 'bootstrap/dist/css/bootstrap.min.css' // css
import $ from 'jquery' // JS library used by bootstrap
import Popper from 'popper.js' // JS library used by bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min' // JS bootstrap bundle

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
