import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {

  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  };

  return (
    <div className="product-card">

      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-content">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.title}</h3>

        <p className="product-price">
          ${product.price}
        </p>

        <div className="product-buttons">

          <Link
            to={`/products/${product.id}`}
            className="btn secondary"
          >
            Details
          </Link>

          <button
            className="btn primary"
            onClick={addToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;