import "./Header.css";
import logo from "../Assets/logo.svg";
import { useState } from "react";
import Lists from "./Lists";
import { Link } from "react-router-dom";
function Header() {
  const [currentPage, setCurrentPage] = useState("Home")
  const listItem = [
    { title: "Home", path: "/" },
    { title: "Quote", path: "/quotes" },
    { title: "Resturants", path: "/restaurants" },
    { title: "Foods", path: "/foods" },
    { title: "Contact", path: "/contact" }
  ]

  const handlePage = (page) => {
    setCurrentPage(page)
  }
  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
          <h1>GeeksFoods</h1>
        </Link>
        <Lists listItem = {listItem} func = {handlePage} currentPage={currentPage}/>
        <div className="nav-btn-container">
          <button className="nav-btn">Get Started</button>
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
