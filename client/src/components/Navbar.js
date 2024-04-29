import React from "react";
import { Link } from 'react-router-dom';  // Import Link component

function Navbar() {

  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'; // Consider replacing this with history.push if using React Router's useHistory for SPA behavior
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          GRUBZEN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className='fa fa-bars' style={{color: 'white'}}></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem('currentUser') ? (
              <div className="dropdown mr-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user" aria-hidden="true"></i> {JSON.parse(localStorage.getItem('currentUser')).name}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/profile">Profile</Link>
                  <button className="dropdown-item" onClick={logout}>Logout</button>
                </div>
              </div>
            ) : (
              <>
                <li className="nav-item active">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
