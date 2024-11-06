import React, { useRef } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";

const Navbar = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Link className="dropdown-item" to="/signin">
          Signin
        </Link>
        <Link className="dropdown-item" to="/logout">
          Logout
        </Link>
        <Link className="dropdown-item" to="/wishlist">
          Wishlist
        </Link>
      </Popover.Body>
    </Popover>
  );

  return (
    <header >
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-body navbar1" >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assets/Images/brand-logo.png")}
              height="20px"
              width={"70px"}
              className="brand-logo"
              alt="Logo"
            />
          </a>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="fa-solid fa-house"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-disabled="true" to="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <button className="nav-link" type="button">
                  <i className="fa-solid fa-user"></i>
                </button>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </nav>

    
      <nav className="navbar  navbar-light  navbar2">
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
              <i className="bi bi-search "></i> 
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
