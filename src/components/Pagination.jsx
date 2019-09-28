import React from "react"
import "./Pagination.scss"

export const Pagination = props => {
  const { pageState, records, setPage } = props
  const { pageSize, curPage } = pageState
  const buttons = [...Array(Math.ceil(records / pageSize)).keys()].map(
    i => i + 1
  )
  return (
    <nav aria-label='...'>
      <ul className='pagination'>
        {buttons.map(i => {
          let itemClass = `page-item ${i === curPage ? "active" : ""}`
          return (
            <li
              key={i}
              className={itemClass}
              aria-current='page'
              onClick={() => setPage(i)}
            >
              <span className='page-link'>{i}</span>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
