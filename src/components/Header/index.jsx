import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../../context/AppContextProvider.js';
import logo from "../../assets/fxdigitallogo.png";
import './index.css';
export const Header = () => {
  const { handleSearchChange } = useContext(Context);
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="logo" /> 
        <input
          className="searchInput"
          placeholder="Search"
          onChange={handleSearchChange}
        />     
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;