import "./Stats.css";

const stats = [
  {
    number: "50+",
    title: "Projects",
  },
  {
    number: "25+",
    title: "Happy Clients",
  },
  {
    number: "10+",
    title: "Web Solutions",
  },
  {
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
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
