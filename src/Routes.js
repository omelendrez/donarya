import React from 'react'
import { Route, Switch } from "react-router-dom";

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Donaciones from './components/Donaciones'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'

const sw = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/donaciones/" component={Donaciones} />
        <Route path="/login/" component={Login} />
        <Route path="/registrarse/" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  )
}

export default sw