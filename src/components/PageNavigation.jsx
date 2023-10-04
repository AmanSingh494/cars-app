import React from 'react'
import { Link } from 'react-router-dom'
const PageNavigation = (props) => {
  const { handleClick } = props

  return (
    <div className='container'>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <Link className='page-link' aria-label='Previous'>
              <span aria-hidden='true'>&laquo;</span>
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='1' name='1' onClick={handleClick}>
              1
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='2' name='2' onClick={handleClick}>
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to='3' name='3' onClick={handleClick}>
              3
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' aria-label='Next'>
              <span aria-hidden='true'>&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PageNavigation
