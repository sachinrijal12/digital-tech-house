import "./Stats.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaGlobe,
  FaHeadset,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "50+",
    title: "Projects",
  },
  {
    icon: <FaUsers />,
    number: "25+",
    title: "Happy Clients",
  },
  {
    icon: <FaGlobe />,
    number: "10+",
    title: "Web Solutions",
  },
  {
    icon: <FaHeadset />,
    number: "24/7",
    title: "Support",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item, index) => (

            <motion.div
              className="stat-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;