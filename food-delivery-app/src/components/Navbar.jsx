import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic fst-bold" to="/">FoodClub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-1">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active" to="/">My Orders</Link>
              </li> : ""}

          </ul>
          <div className='d-flex'>
            {(!localStorage.getItem("authToken")) ?
              <div>
                <Link className="btn bg-light text-danger mx-1" to="/login">Login</Link>
                <Link className="btn bg-light text-danger mx-1" to="/signup">Sign Up</Link>

              </div> :
              <div>
                <Link className="btn bg-light text-danger mx-1" to="/">My cart</Link>
                <Link className="btn bg-light text-dark mx-1" to="/" onClick={handleLogout}>Log out</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
