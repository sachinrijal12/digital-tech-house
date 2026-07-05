import "./About.css";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Us</h2>

        <p className="about-text">
          <span>Digital Tech House</span> is a modern web development company
          dedicated to building fast, responsive, and visually appealing
          websites. Our mission is to help businesses establish a strong online
          presence with clean design and reliable technology.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <FaBullseye className="icon" />
            <h3>Mission</h3>
            <p>
              Deliver high-quality websites that help businesses grow online.
            </p>
          </div>

          <div className="about-card">
            <FaEye className="icon" />
            <h3>Vision</h3>
            <p>
              Become a trusted digital partner for businesses around the world.
            </p>
          </div>

          <div className="about-card">
            <FaHandshake className="icon" />
            <h3>Values</h3>
            <p>
              Quality, innovation, transparency, and customer satisfaction.
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}

export default About;