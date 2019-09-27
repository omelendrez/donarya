import React from "react"
import { moment } from "../utils"

export const TableRow = ({ record, setSelected }) => {
  return (
    <tr key={record.id}>
      <td>{record.description}</td>
      <td>{moment(record.createdAt).format("L")}</td>
      <td>
        <button className='btn btn-primary' onClick={() => setSelected(record)}>
          Detalles
        </button>
      </td>
    </tr>
  )
}
