function About() {

  return (
    <section className="page">

      <div className="page-heading center">

        <p className="small-title">
          ABOUT US
        </p>

        <h1>
          Welcome to ShopEase
        </h1>

        <p>
          ShopEase is a modern e-commerce
          application created using React.
          The application demonstrates
          routing, API integration,
          reusable components and
          React Hooks.
        </p>

      </div>

      <div className="info-grid">

        <div className="info-card">

          <h2>
            Quality Products
          </h2>

          <p>
            Explore products from
            different categories.
          </p>

        </div>

        <div className="info-card">

          <h2>
            Easy Shopping
          </h2>

          <p>
            Search products and add
            them to your shopping cart.
          </p>

        </div>

        <div className="info-card">

          <h2>
            React Powered
          </h2>

          <p>
            Built using modern React
            concepts and React Router.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;