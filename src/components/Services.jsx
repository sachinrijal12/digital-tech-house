import "./Services.css";
import {
  FaCode,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode />,
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites built with the latest technologies.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Professional online stores with secure payment integration and product management.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Websites optimized for desktop, tablet, and mobile devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Beautiful and user-friendly interfaces that improve customer experience.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    description:
      "Improve search engine visibility and website performance.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance",
    description:
      "Website updates, bug fixes, backups, and long-term technical support.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <p className="section-subtitle">
          We provide professional digital solutions for businesses of every size.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;