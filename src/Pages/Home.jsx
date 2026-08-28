import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="small-title">
          WELCOME TO SHOPEASE
        </p>

        <h1>
          Everything you need,
          all in one place.
        </h1>

        <p className="hero-text">
          Discover amazing products across
          electronics, fashion, beauty,
          groceries and more.
        </p>

        <div className="hero-buttons">

          <Link
            to="/products"
            className="btn primary large"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="btn secondary large"
          >
            About Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Home;