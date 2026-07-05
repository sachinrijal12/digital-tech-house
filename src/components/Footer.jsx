import "./Footer.css";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Logo />

          <p>
            Building modern, responsive, and high-performance websites for
            businesses around the world.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="icons">
            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p>
          © {new Date().getFullYear()} Digital Tech House. All Rights Reserved.
        </p>
      </div>

      <button
        className={`top-btn ${showTop ? "show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;