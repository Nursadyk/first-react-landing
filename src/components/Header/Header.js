import React from "react";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo-wrapper">
            <a className="logo" href="">
              Cozy House
              <span className="logo-bottom">Shelter for pets in Boston</span>
            </a>
          </div>
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <a className="navbar__link">About the shelter</a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link">Our pets</a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link">Help the shelter</a>
              </li>
              <li className="navbar__item">
                <a className="navbar__link">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
