import React, { useEffect, useState } from 'react'
import API from '../services/api'

const Donaciones = () => {

  const [donations, setDonations] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    API
      .get(`/donations?query=${search}`)
      .then(response => {
        const { donations } = response.data
        setDonations(donations)
      })
  }, [search])

  const handleChange = e => setSearch(e.target.value)

  return (
    <div className="container mb-5 pb-5">
      <p className="my-4 display-4">Donaciones</p>
      <div className="form-group row">
        <label htmlFor="search" className="col-sm-2 col-form-label">Buscar</label>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="search"
            value={search}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descripción</th>
            <th scope="col">Donante</th>
            <th scope="col">Teléfono</th>
            <th scope="col">CUIT/CUIL</th>
            <th scope="col">Elementos</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            donations.map(record => {
              return (
                <tr key={record.id}>
                  <td>{record.description}</td>
                  <td>{record.user.fullName}</td>
                  <td>{record.user.phone}</td>
                  <td>{record.user.cuit}</td>
                  <td>{record.donation_items.length}</td>
                  <td>
                    <button className="btn btn-primary">
                      Detalles
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Donaciones