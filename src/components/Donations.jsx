import React, { useEffect, useState } from "react"
import API from "../services/api"
import { Search } from "./Search"
import { Details } from "./Details"
import { TableRow } from "./TableRow"
import "./Donations.scss"

const Donaciones = () => {
  const [donations, setDonations] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState({})

  useEffect(() => {
    API.get(`/donations?query=${search}`).then(response => {
      setSelected({})
      const { donations } = response.data
      setDonations(donations)
    })
  }, [search])

  const handleChange = e => setSearch(e.target.value)
  const handleClose = () => setSelected({})

  return (
    <div className='container-fluid mb-5 pb-5'>
      <div className='flex-container'>
        <div className='table-view'>
          <Search search={search} handleChange={handleChange} />
          <table className='table'>
            <thead>
              <tr>
                <th>Número</th>
                <th>Descripción</th>
                <th>Elementos</th>
                <th>Creada</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {donations.map(record => {
                return (
                  <TableRow
                    key={record.id}
                    record={record}
                    selected={selected}
                    setSelected={setSelected}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='details-view'>
          <Details record={selected} handleClose={handleClose} />
        </div>
      </div>
    </div>
  )
}

export default Donaciones
