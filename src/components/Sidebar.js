import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className="sidebar">
      <div className="title">
        <h1>DANIELA MERLO</h1>
      </div>
      <div className="links mt-2">
        <NavLink exact to={'/about'} activeClassName="active" className="link">
          About me
        </NavLink>
        <NavLink exact to={'/makeup'} activeClassName="active" className="link">
          Makeup
        </NavLink>
        <NavLink
          exact
          to={'/peinado'}
          activeClassName="active"
          className="link"
        >
          Peinado
        </NavLink>
        <NavLink exact to="/contacto" activeClassName="active" className="link">
          <span className="link-text">Contacto</span>
        </NavLink>
      </div>
    </div>
  )
}
