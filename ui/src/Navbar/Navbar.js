import React from "react";
import logo from './Logo-02.png';



function Navbar () 
{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid ml-2">
    <img src={logo} alt="logo" style={{width: '150px'}}/>


    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" aria-current="page" href="#">Home&nbsp;<i class="fas fa-home"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" href="./Score/Score">Score</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" href="./About/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white text-uppercase ml-5" href="./Contact/Contact">Contact</a>
        </li>
        {/* <button type="button" className="btn btn-outline-secondary mr-1">Secondary</button> */}
       
      </ul>
      <button type="button" className="btn btn-outline-secondary mr-1">Secondary</button>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


    );
    
}

export default Navbar;