import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />

      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="hero-tag">Welcome to Digital Tech House</span>

            <h1>
              Building <span>Digital Experiences</span>
              <br />
              That Drive Business Growth
            </h1>

            <p>
              We design and develop modern websites that are fast, responsive,
              secure, and built to help your business grow online.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn">
                Start Your Project
              </a>

              <a href="#portfolio" className="btn secondary">
                View Our Work
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-title">What We Deliver</div>

            <div className="panel-list">
              <div className="panel-item">
                <h3>Clean Interfaces</h3>
                <p>Minimal layouts with clear structure and strong contrast.</p>
              </div>

              <div className="panel-item">
                <h3>Fast Websites</h3>
                <p>Precise development for performance and reliability.</p>
              </div>

              <div className="panel-item">
                <h3>Modern Systems</h3>
                <p>Organized workflows designed to scale with your brand.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <h3>Modern Design</h3>
          </div>

          <div>
            <h3>Fast Performance</h3>
          </div>

          <div>
            <h3>Client Focused</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
