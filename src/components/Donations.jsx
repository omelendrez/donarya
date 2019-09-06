import React, { useEffect, useState } from 'react'
import API from '../services/api'
import { Search } from './Search'
import { Details } from './Details'

const Donaciones = () => {

  const [donations, setDonations] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState({})

  useEffect(() => {
    API
      .get(`/donations?query=${search}`)
      .then(response => {
        setSelected({})
        const { donations } = response.data
        setDonations(donations)
      })
  }, [search])

  const handleChange = e => setSearch(e.target.value)
  const handleClose = () => setSelected({})

  return (
    <div className="container mb-5 pb-5">
      <p className="my-4 display-4">Donaciones</p>
      <Search search={search} handleChange={handleChange} />
      {!selected.id &&
        <table className="table">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Donante</th>
              <th>Teléfono</th>
              <th>CUIT/CUIL</th>
              <th>Elementos</th>
              <th></th>
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
                      <button className="btn btn-primary" onClick={() => setSelected(record)}>
                        Detalles
                    </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>}
      {selected.id && <Details record={selected} handleClose={handleClose} />}
    </div>
  )
}

export default Donaciones