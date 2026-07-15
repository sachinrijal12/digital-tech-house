import "./Services.css";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites built with the latest technologies.",
  },
  {
    title: "E-Commerce",
    description:
      "Professional online stores with secure payment integration and product management.",
  },
  {
    title: "Responsive Design",
    description: "Websites optimized for desktop, tablet, and mobile devices.",
  },
  {
    title: "UI / UX Design",
    description:
      "Beautiful and user-friendly interfaces that improve customer experience.",
  },
  {
    title: "SEO Optimization",
    description: "Improve search engine visibility and website performance.",
  },
  {
    title: "Maintenance",
    description:
      "Website updates, bug fixes, backups, and long-term technical support.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>

        <p className="section-subtitle">
          We provide professional digital solutions for businesses of every
          size.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
