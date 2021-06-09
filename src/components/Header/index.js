import React, { Fragment } from "react";

import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="ally-logo" alt="React Logo" />
      </header>
    </Fragment>
  );
}

export default Header;
