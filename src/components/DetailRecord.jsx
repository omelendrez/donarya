import React from 'react'
import './DetailRecord.scss'

export const DetailRecord = (props) => {
  const { label, value } = props
  return (
    <div className="record">
      <div className="label">{label}</div>: <div className="value">{value}</div>
    </div>
  )
}