import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/'>
        <Logo />
      </Link>
      <NavLink to='/' exact>
        Inicio
      </NavLink>
      <NavLink to='/sobre/' exact>
        Sobre
      </NavLink>
      <NavLink to='/reportes/' exact>
        Reportes
      </NavLink>
      <NavLink to='/guias/' exact>
        Guias
      </NavLink>
      <NavLink to='/contact/' exact>
        Contacto
      </NavLink>
    </div>
  </nav>
)
