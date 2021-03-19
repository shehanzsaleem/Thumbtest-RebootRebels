import React from "react";
import logo from './Logo-02.png';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

      <img src={logo} alt="logo" style={{ width: '150px' }} />

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ml-2 mb-lg-0 ">
          <li className="nav-item">
            <Link className="nav-link ml-4" aria-current="page" to="/">Home&nbsp;
 {/* <i class="fas fa-home">
 </i> */}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-4" to="/Model">Test Thumbnail</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-4" to="/Video">Generate Thumbnail</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-4" to="/About">How it Works</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ml-4" to="/Contact">Contact</Link>
          </li>
          {/* <button type="button" className="btn btn-outline-secondary mr-1">Secondary</button> */}
          <li class="divider-vertical"></li>
        </ul>
        <Link className="" to="/Login">
        <button type="button" className="btn btn-outline-secondary ml-4">Log In</button>
        </Link>
        {/* <form className="d-flex">
 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
 <button className="btn btn-outline-success" type="submit">Search</button>
 </form> */}
      </div>

    </nav>


  );

}

export default Navbar;