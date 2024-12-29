import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return  <>
  <nav className="navbar navbar-expand-lg py-3 ">
  <div className="container">

    <Link className="navbar-brand text-uppercase  fs-2 fw-bolder" to="">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link  fs-4 fw-bold  text-uppercase" aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  fs-4 fw-bold  text-uppercase" aria-current="page" to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-4 fw-bold  text-uppercase" to="contact">contact</NavLink>
        </li>
      </ul></div>
  </div>
</nav>

  
  </>
}
