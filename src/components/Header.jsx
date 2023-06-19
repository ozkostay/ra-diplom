import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from './img/header-logo.png'
// import Banner from "./Banner";

export default function Header() {
  const [isVisible, setVisible] = useState(false);
  
  function toggleSearch() {
    console.log('Search!!!');
    setVisible(!isVisible);
  }

  return(
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              {/* <a className="navbar-brand" href="/"> */}
              <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Bosa Noga" />
              </Link>
              <div className="collapase navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"> Главная </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Каталог</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">О магазине</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">Контакты</Link>
                  </li>
                </ul>
                <div>
                  <div className="header-controls-pics">
                    <div onClick={toggleSearch} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                    <div className="header-controls-pic header-controls-cart">
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </div>
                  <form data-id="search-form" className={`header-controls-search-form form-inline ${isVisible ? null : "invisible"}`}>
                    <input className="form-control" placeholder="Поиск" />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
