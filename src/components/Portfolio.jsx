import "./Portfolio.css";
import projects from "../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>

        <p className="section-subtitle">Some of our recent work.</p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} />

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
