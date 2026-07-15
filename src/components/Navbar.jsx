import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import useActiveSection from "../hooks/useActiveSection";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Logo />

        <button
          type="button"
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-links"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <div
          className={menuOpen ? "nav-overlay active" : "nav-overlay"}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <ul
          id="mobile-nav-links"
          className={menuOpen ? "nav-links active" : "nav-links"}
        >
          <li>
            <a
              href="#home"
              className={active === "home" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={active === "services" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className={active === "portfolio" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
