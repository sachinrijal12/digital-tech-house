import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <div className="loader-content">

        <img
          src="/images/logo.png"
          alt="Digital Tech House"
          className="loader-logo"
        />

        <h1>Digital Tech House</h1>

        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>

      </div>

    </div>
  );
}

export default Loader;