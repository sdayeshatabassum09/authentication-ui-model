import "./Explore.css";
import exploreImage from "../assets/Image Wrapper.png";

export default function Explore() {
  return (
    <section className="explore-section" id="explore">
      <h2>
        Find new trails to explore and
        <br />
        adventures to embark on.
      </h2>

      <div className="explore-image-wrapper">
        <img src={exploreImage} alt="People exploring mountain trails" />
      </div>
    </section>
  );
}