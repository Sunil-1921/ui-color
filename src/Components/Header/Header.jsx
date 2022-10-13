import React from "react";
import logo from "../Images/favicon2.png";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <img className="logo" src={logo} alt="logo" />
            <a
              className="navbar-brand ui-color"
              href="https://sunil-1921.github.io/ui-color/"
            >
              UI <span className="Color">Color</span>
            </a>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="https://sunil-1921.github.io/ui-color/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/Sunil-1921/ui-color/blob/master/CONTRIBUTING.md"
              >
                Contribute
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
