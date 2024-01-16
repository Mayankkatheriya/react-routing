import "./Header.css";
import logo from "../../Assets/logo.svg";
import { useState } from "react";
import Lists from "./Lists";
import { Link } from "react-router-dom";
function Header() {
  const listItem = [
    { title: "Home", path: "/" },
    { title: "Quote", path: "/quotes" },
    { title: "Resturants", path: "/restaurants" },
    { title: "Foods", path: "/foods" },
    { title: "Contact", path: "/contact" },
  ];
  const [showHamburger, setHamburger] = useState(false);

  const handlePage = () => {
    setHamburger(false)
  };
  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Logo" />
          <h1>GeeksFoods</h1>
        </Link>
        <div className={showHamburger ? "mobile-nav-menu" :"nav-menu"}>
          <Lists
            listItem={listItem}
            func={handlePage}
            className={"nav-menu"}
          />
        </div>
        <div className="nav-btn-container">
          <button className="nav-btn">Get Started</button>
        </div>
        <div className="hamburger">
          <i
            onClick={() => setHamburger(!showHamburger)}
            className="fa-solid fa-bars-staggered"
          ></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
