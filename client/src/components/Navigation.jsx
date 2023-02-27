import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='header-section'>
      <ul className='navigation-items'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/golf'>Golf</Link>
        </li>
        <li>
          <Link to='/username'>Sign In</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
