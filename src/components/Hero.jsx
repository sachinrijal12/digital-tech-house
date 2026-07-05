import "./Hero.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaRocket } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

     <div className="hero-bg">

    <span className="circle one"></span>

    <span className="circle two"></span>

    <span className="circle three"></span>

</div>

      <motion.div
        className="hero-content"
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >

        <span className="hero-tag">
          🚀 Welcome to Digital Tech House
        </span>

        <h1>
          Building
          <span> Digital Experiences </span>
          That Drive Business Growth
        </h1>

        <p>
          We design and develop modern websites that are
          fast, responsive, secure and built to help your
          business grow online.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="btn">
            Start Your Project
            <FaArrowRight />
          </a>

          <a href="#portfolio" className="btn secondary">
            View Our Work
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <FaLaptopCode />
            <h3>Modern Design</h3>
          </div>

          <div>
            <FaRocket />
            <h3>Fast Performance</h3>
          </div>

          <div>
            ⭐
            <h3>Client Focused</h3>
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;