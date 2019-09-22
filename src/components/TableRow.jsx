import React from "react"
import { moment } from "../utils"

export const TableRow = ({ record, selected, setSelected }) => {
  return (
    <tr
      key={record.id}
      className={selected.id && selected.id === record.id ? "active" : ""}
    >
      <td>{record.id}</td>
      <td>{record.description}</td>
      <td>{record.donation_items.length}</td>
      <td>{moment(record.createdAt).format("L")}</td>
      <td>
        {selected.id !== record.id && (
          <button
            className='btn btn-primary'
            onClick={() => setSelected(record)}
          >
            Detalles
          </button>
        )}
        {selected.id === record.id && (
          <i className='fas fa-chevron-right float-right'></i>
        )}
      </td>
    </tr>
  )
}
