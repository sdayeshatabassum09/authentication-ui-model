import "./Nav.css";
import trailHiveLogo from "../assets/TrailHive.svg.png";

export default function Nav() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <img src={trailHiveLogo} alt="TrailHive logo" />
      </a>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#explore">Pricing</a>
        <a href="#community">Blog</a>
        <a href="#about">About us</a>
      </div>

      <div className="nav-buttons">
        <a href="#contact" className="contact-btn">
          Contact us
        </a>

        <a href="#download" className="download-btn">
          Download the app
        </a>
      </div>
    </nav>
  );
}