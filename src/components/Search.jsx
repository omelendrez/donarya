import React from 'react'

export const Search = (props) => {
  const { search, handleChange } = props
  return (
    <div className="form-group row">
      <label htmlFor="search" className="col-sm-1 col-form-label">Buscar</label>
      <div className="col-sm-4">
        <input
          type="text"
          className="form-control"
          id="search"
          value={search}
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  )
}
