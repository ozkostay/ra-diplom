import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import headerLogo from './img/header-logo.png'
import { setFindString } from "../store/actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const { findString } = useSelector((state) => state.products);
  const [isVisible, setVisible] = useState(false);
  const [findStringHome, setFindStringHome] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  function toggleSearch(e) {
    
    e.preventDefault();
    setVisible(!isVisible);
    // пустую строку или пробелы не ищем
    if (isVisible && findStringHome.trim() === '') {
      return;
    }
    // Переходив в каталог с параметром для поиска
    if (isVisible) {
      const param = findStringHome;
      setFindStringHome('');
      console.log('================ ищем', param);
      // Переход в каталог с параметром
      dispatch(setFindString(param));
      console.log('================ findString', findString);
      navigate('/catalog');
    }
  }

  return(
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
                  <form
                    onSubmit={toggleSearch}
                    data-id="search-form" 
                    className={`header-controls-search-form form-inline 
                    ${isVisible ? null : "invisible"}`}>
                    <input 
                      value={findStringHome} 
                      onChange={(e) => setFindStringHome(e.target.value)} 
                      className="form-control" 
                      placeholder="Поиск" />
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
