import React from 'react'

export const Details = (props) => {
  const { record } = props
  console.log(record)
  return (
    <div>
      {record.description}
    </div>
  )
}