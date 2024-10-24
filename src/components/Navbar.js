import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";


const Navbar = () => {
  return (
    <header>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#" >
            <img
              src={require("../assets/Images/brand-logo.png")}
              height="20px"
              width={"70px"}
              className="brand-logo"
              alt="Logo"
            />
        {/* <span className="brand-name">ell&an</span> */}
          </a>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
              <i class="fa-solid fa-house"></i>
              </Link>
            </li>
         
            <li className="nav-item">
              <Link className="nav-link active" aria-disabled="true" to="#">
              <i class="fa-solid fa-cart-shopping"></i>
                
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-user"></i>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/signin">
                    Signin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/wishlist">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Second Navbar with Search Bar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <form className="d-flex align-items-center w-100" role="search">
            <input
              className="form-control me-2 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" style={{ display: 'none' }}>
              Search
            </button>
            <button className="btn btn-outline" type="button">
              <i className="bi bi-search "></i> {/* Bootstrap icon for search */}
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
