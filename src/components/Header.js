import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>
        movie<span style={{ color: "#3057d8" }}>base</span>
      </h1>
      <FaSearch className="logo" />
    </div>
  );
};

export default Header;
