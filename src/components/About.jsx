import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div>
        <h2 className="section-title">About Us</h2>

        <p className="about-text">
          <span>Digital Tech House</span> is a modern web development company
          dedicated to building fast, responsive, and visually appealing
          websites. Our mission is to help businesses establish a strong online
          presence with clean design and reliable technology.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Mission</h3>
            <p>
              Deliver high-quality websites that help businesses grow online.
            </p>
          </div>

          <div className="about-card">
            <h3>Vision</h3>
            <p>
              Become a trusted digital partner for businesses around the world.
            </p>
          </div>

          <div className="about-card">
            <h3>Values</h3>
            <p>Quality, innovation, transparency, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
