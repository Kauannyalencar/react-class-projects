
import React, { useContext } from "react";
import "./header.css";
import  logo  from '../../assets/LOGO.svg'

import { ThemeContext } from "../../Theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header-container">
      {/* <Logo class="header-logo" /> */}
      <header className="header-logo">
        <img src={logo} alt="" />
      </header>
      <div className="header-toggle-buttons">
        <button onClick={() => toggleTheme()}>{theme}</button>
      </div>
    </div>
  );
};

export default Header;