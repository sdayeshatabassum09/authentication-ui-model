import { NavLink, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  const getNavClass = ({ isActive }) => {
    return isActive
      ? "nav-link active"
      : "nav-link";
  };

  return (
    <header className="navbar">

      <Link to="/" className="logo">
        ShopEase
      </Link>

      <nav className="nav-links">

        <NavLink
          to="/"
          className={getNavClass}
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={getNavClass}
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={getNavClass}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={getNavClass}
        >
          Contact
        </NavLink>

        <NavLink
          to="/cart"
          className={getNavClass}
        >
          Cart
          <span className="cart-count">
            {totalItems}
          </span>
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;