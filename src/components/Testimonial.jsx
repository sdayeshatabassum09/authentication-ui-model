import "./Testimonial.css";
import testimonialBackground from "../assets/second-testimonial-bg.jpg.png";

export default function Testimonial() {
  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: `url(${testimonialBackground})` }}
    >
      <div className="testimonial-overlay">
        <p className="testimonial-label">TESTIMONIAL</p>

        <h2>
          "TrailHive has completely changed the way I explore the outdoors.
          The personalized trail recommendations and virtual challenges have
          kept me motivated and engaged with my adventures."
        </h2>

        <p className="testimonial-author">- John R.</p>
      </div>
    </section>
  );
}