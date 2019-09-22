import React from "react"
import { DetailItem } from "./DetailItem"
import { DetailRecord } from "./DetailRecord"
import { moment } from "../utils"
import "./Details.scss"

export const Details = ({ record, handleClose }) => {
  const { description, user, donation_items, id, createdAt } = record
  if (!user) return null
  const { fullName, dni, cuit, phone, address, email } = user
  return (
    <React.Fragment>
      <div className='card bg-light mb-3'>
        <h6 className='card-header'>
          {id} - {description} - {moment(record.createdAt).format("L")}
        </h6>
        <div className='card-body'>
          <p className='card-text'>
            <DetailRecord label='Donante' value={fullName} />
            <DetailRecord label='DNI' value={dni} />
            <DetailRecord label='CUIT' value={cuit} />
            <DetailRecord label='Teléfono' value={phone} />
            <DetailRecord label='Dirección' value={address} />
            <DetailRecord label='Email' value={email} />
            <DetailRecord label='Creada' value={moment(createdAt).fromNow()} />
            <table className='table table-sm'>
              <thead>
                <th>Artículo</th>
                <th>Cantidad</th>
              </thead>
              <tbody>
                {donation_items.map(item => {
                  return <DetailItem key={item.id} item={item} />
                })}
              </tbody>
            </table>
          </p>
        </div>
      </div>
      <button
        className='btn btn-primary float-right'
        onClick={() => handleClose()}
      >
        Cerrar
      </button>
    </React.Fragment>
  )
}
