import React from "react";
import "../style/Header.css";

const Header = ({ resetCrimes }) => {
  return (
    <header>
      <div onClick={resetCrimes} className="app-header">
        crime comparison
      </div>
    </header>
  );
};

export default Header;
