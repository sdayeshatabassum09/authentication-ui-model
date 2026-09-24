import React from "react";
import "./Footer.css";

import TrailHive from "../assets/TrailHive.svg.png";

 export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-logo">
          <img src={TrailHive} alt="TrailHive" />
        </div>

    
        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#explore">Explore</a>
          <a href="#community">Community</a>
        </div>

        
        <div className="footer-column">
          <h4>Company</h4>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

        
        <div className="footer-newsletter">

          <h4>Stay updated</h4>

          <p>
            Get the latest trails, adventures and
            updates from TrailHive.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="button">
              Subscribe
            </button>
          </div>

        </div>

      </div>
      <div className="footer-bottom">

        <p>
          © 2026 TrailHive. All rights reserved.
        </p>

        <div className="footer-social">
          <a href="#instagram">Instagram</a>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
        </div>

      </div>

    </footer>
  );
}
