import React, { useEffect, useState } from "react"
import API from "../services/api"
import { Search } from "./Search"
import { Details } from "./Details"
import { TableRow } from "./TableRow"
import { Pagination } from "./Pagination"
import { Loading } from "./Loading"
import "./Donations.scss"

const Donations = () => {
  const pagination = {
    curPage: 1,
    pageSize: 5
  }
  const [pageState, setPageState] = useState(pagination)
  const [donations, setDonations] = useState([])
  const [pageItems, setPageItems] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    API.get(`/donations?query=${search}`).then(response => {
      setSelected({})
      const { donations } = response.data
      setDonations(donations)
      setPage(1)
      setLoading(false)
    })
  }, [search])

  const handleChange = e => setSearch(e.target.value)
  const handleClose = () => setSelected({})

  const setPage = pageId => {
    const newPageState = { ...pageState, curPage: pageId }
    setPageState(newPageState)
  }

  useEffect(() => {
    const { curPage, pageSize } = pageState
    const recordFrom = (curPage - 1) * pageSize
    const recordTo = curPage * pageSize - 1
    const recordsToShow = donations.filter(
      (i, index) => index >= recordFrom && index <= recordTo
    )
    setPageItems(recordsToShow)
  }, [pageState])

  return (
    <div className='container-fluid mb-5 pb-5'>
      {!selected.id && (
        <div className='table-view'>
          <Search search={search} handleChange={handleChange} />
          {loading && <Loading />}
          {!loading && <table className='table'>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Creada</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map(record => {
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
          </table>}
          {!loading &&
            <Pagination
              setPage={setPage}
              pageState={pageState}
              records={donations.length}
            />
          }
        </div>
      )}
      <div className='details-view'>
        <Details record={selected} handleClose={handleClose} />
      </div>
    </div>
  )
}

export default Donations
