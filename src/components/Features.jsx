import "./Features.css";

import featureOne from "../assets/Feature1.jpg.png";
import featureTwo from "../assets/Feature2.jpg.png";
import featureThree from "../assets/Feature3.jpg.png";

export default function Features() {
  const features = [
    {
      image: featureOne,
      title: "Access nature",
      description:
        "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
    },
    {
      image: featureTwo,
      title: "Access nature",
      description:
        "Discover exciting outdoor adventures with detailed trail information, helpful ratings, and reviews from other users.",
    },
    {
      image: featureThree,
      title: "Access nature",
      description:
        "Find the right outdoor experience for you with trail information and useful community recommendations.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <p>FEATURES</p>

        <h2>
          Stay Active
          <br />
          and Healthy
        </h2>

        <a href="#explore" className="learn-button">
          Learn more
        </a>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}