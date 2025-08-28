import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <nav
            className="navbar navbar-expand-sm bg-success"
        >
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-3 my-2 my-lg-0">
                        <button
                            className="btn btn-badge border border-1 border-black position-relative"
                        >
                            <FaShoppingCart/>
                            <span
                                className="badge bg-danger position-absolute top-0 right-0 rounded-pill"
                                >0</span
                            >
                        </button>

                        <button className='btn btn-warning'>
                            <Link to="/login">Login</Link>
                        </button>
                        
                    </div>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar