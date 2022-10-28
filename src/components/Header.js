import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>
        Film<span style={{ color: "#2142AB" }}>Finder</span>
      </h1>
      <FaSearch className="logo" />
    </div>
  );
};

export default Header;
