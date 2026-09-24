import React from "react";
import "./Community.css";

import Dell from "../assets/Dell.svg.png";
import Zendesk from "../assets/Zendesk.svg.png";
import Rakuten from "../assets/Rakuten.svg.png";
import Pacific from "../assets/Pacific.svg.png";
import Ncr from "../assets/Ncr.svg.png";
import Lattice from "../assets/Lattice.svg.png";
import Ted from "../assets/Ted.svg.png";

  export default function Community() {
  return (
    <section className="testimonial-section">

      <p className="testimonial-label">
        TESTIMONIAL
      </p>

      <div className="testimonial-content">
        <h1>
          "TrailHive has completely changed the way I explore
          <br />
          the outdoors. The personalized trail
          <br />
          recommendations and virtual challenges have kept
          <br />
          me motivated and engaged with my adventures."
        </h1>

        <p className="testimonial-author">
          - John R.
        </p>
      </div>

      <div className="trusted-section">

        <p className="trusted-title">
          Trusted by teams at over 1,000 of the world's leading organizations
        </p>

        <div className="company-logos">

          <img src={Dell} alt="Dell" />

          <img src={Zendesk} alt="Zendesk" />

          <img src={Rakuten} alt="Rakuten" />

          <img src={Pacific} alt="Pacific Funds" />

          <img src={Ncr} alt="NCR" />

          <img src={Lattice} alt="Lattice" />

          <img src={Ted} alt="TED" />

        </div>

      </div>

    </section>
  );
}
