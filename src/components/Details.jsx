import React from 'react'
import { DetailItem } from './DetailItem'
import { DetailRecord } from './DetailRecord'
import { moment } from '../utils'

export const Details = ({ record, handleClose }) => {
  const { description, user, donation_items, id, createdAt } = record
  if (!user) return null
  const { fullName, dni, cuit, phone, address, email } = user
  return (
    <React.Fragment>
      <div className="card bg-light mb-3">
        <div className="card-header">Donación # {id}</div>
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">
            <DetailRecord label="Donante" value={fullName} />
            <DetailRecord label="DNI" value={dni} />
            <DetailRecord label="CUIT" value={cuit} />
            <DetailRecord label="Teléfono" value={phone} />
            <DetailRecord label="Dirección" value={address} />
            <DetailRecord label="Email" value={email} />
            <DetailRecord label="Creada" value={moment(createdAt).fromNow()} />
            <table className="table">
              <thead>
                <th>Artículo</th>
                <th>Cantidad</th>
              </thead>
              <tbody>
                {donation_items.map(item => {
                  return (<DetailItem key={item.id} item={item} />)
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
