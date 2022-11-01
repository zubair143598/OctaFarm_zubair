import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar header   navbar-expand-lg  text-white">
    <div className="container">
      <a className=" nav-link active" aria-current="page" href="#">
        <img src="./Assists/logo.ico" alt="" className="" style={{width:"50px"}} />
        <p className='d-inline fs-4'>Octa Farm</p>
      </a>

      <button
        className=" color text-white navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white mx-4 fw-bolder clr" aria-current="page" to="Overview">
            Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-4  clr fw-bolder" to="Traction">
            Traction
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-4 fw-bolder clr" to="Tokenomics">
            Tokenomics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-4 fw-bolder clr" href="#">
            Roadmap
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white mx-4 fw-bolder clr" href="#">
              FAQs
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header