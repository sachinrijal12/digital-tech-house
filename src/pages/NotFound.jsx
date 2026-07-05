import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">

      <div className="not-found-content">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn">
          Back to Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;