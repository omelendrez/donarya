import React from 'react'
import { DetailItem } from './DetailItem'

export const Details = ({ record, handleClose }) => {
  const { description, user, donation_items, id } = record
  if (!user) return null
  const { fullName, dni, cuit, phone, address, email } = user
  return (
    <React.Fragment>
      <div className="card bg-light mb-3">
        <div className="card-header">Donación # {id}</div>
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">
            <p>
              Donante: <strong>{fullName}</strong>
            </p>
            <p>
              DNI: <strong>{dni}</strong>
            </p>
            <p>
              CUIT: <strong>{cuit}</strong>
            </p>
            <p>
              Teléfono: <strong>{phone}</strong>
            </p>
            <p>
              Dirección: <strong>{address}</strong>
            </p>
            <p>
              Email: <strong>{email}</strong>
            </p>
            <table className="table">
              <thead>
                <th>Artículo</th>
                <th>Cantidad</th>
              </thead>
              <tbody>
                {donation_items.map(item => {
                  return (<DetailItem item={item} />)
                })}
              </tbody>
            </table>
          </p>
        </div>
      </div>
      <button className="btn btn-info" onClick={() => handleClose()}>Volver</button>
    </React.Fragment>
  )
}
