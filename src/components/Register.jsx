import React, { useState } from 'react'

const Register = () => {
  const [nick, setNick] = useState('')
  const [name, setName] = useState('')
  const [dni, setDni] = useState('')
  const [phone, setPhone] = useState('')
  const [adress, setAdress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nick, name, dni, phone, adress, email, password, password2)
  }

  return (
    <div className="container mt-4 mb-5 pb-5">
      <h4 className="mb-4">Register</h4>
      <form onSubmit={handleSubmit}></form>

      <form>
        <div className="form-row">
          <div className="col">
            <label htmlFor="nick">Nickname</label>
            <input type="text" className="form-control" id="nick" placeholder="Sobrenombre" value={nick}
            onChange={e => setNick(e.target.value)}/>
          </div>
          <div className="col">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Nombre" value={name}
            onChange={e => setName(e.target.value)}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
          <input type="text" className="form-control" id="dni" placeholder="Número de Documento" value={dni}
            onChange={e => setDni(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" placeholder="Número De Teléfono" value={phone}
            onChange={e => setPhone(e.target.value)}  />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adress</label>
          <input type="text" className="form-control" id="address" placeholder="Dirección" value={adress}
            onChange={e => setAdress(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Dirección De Email" value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Contraseña" value={password}
            onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password2">Retype Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Reescribir Contraseña" value={password2}
            onChange={e => setPassword2(e.target.value)}/>
          </div>

        </div>

        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>

      </form>
    </div>
  )
}

export default Register