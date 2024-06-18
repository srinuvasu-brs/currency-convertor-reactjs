import React from "react";
import { Link } from "react-router-dom"

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header>
          <div  className="d-flex bg-gradient">
              <div className="d-flex flex-grow-1">
                <nav className="courseTitle">
                    <button className="navbar-brand border-0">
                        <img src={require("../../currency logo.png")} alt='logo' />
                    </button>
                </nav>
                <div className="flex-grow-1">
                    <div className="ReactTitle ps-3  d-flex align-items-center">
                      <img src={require("../../react-2@2x.png")}  alt='logo' />
                      <h3 className="mb-0">Reactjs Apps with APIs</h3>
                    </div>
                    <div className="d-flex ps-3 align-items-center">
                      <div className="flex-grow-1">
                        <h4>Currency Convertor</h4>
                          <p className="pb-0 mb-0">Purpose: API contains currency it will return the whole list of other currencies</p>
                      </div>
                      <div className="link me-3">
                          <p className="mb-0 py-0"> <a href="https://www.exchangerate-api.com/">https://www.exchangerate-api.com/<img src={require("../../noun-link.png")} className="ms-2" alt="link" target="_blank" /></a></p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
      </header>
      <nav className="navbar navbar-expand-lg bg-light d-none">
        <div className="container-fluid">
          {/* LOGO */}
          <div className="pull-right">
            {/* NAVIGATION MENU */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          <p>PERMIT USERS TO DETERMINE THE CONVERSION VALUES OF ONE CURRENCY TO ANOTHER QUICKLY.</p>
        </div>
      </footer>
    </>
  )
}
