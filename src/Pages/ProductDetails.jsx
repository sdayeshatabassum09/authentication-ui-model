import {
  useNavigate,
  useParams,
  Link
} from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import Loading from "../Components/Loading";

import { useCart } from "../Context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { dispatch } = useCart();

  const {
    data: product,
    loading,
    error
  } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) {

    return (
      <section className="page">
        <Loading />
      </section>
    );

  }

  if (error) {

    return (
      <section className="page">
        <div className="error-box">
          {error}
        </div>
      </section>
    );

  }

  const addToCart = () => {

    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });

  };

  return (
    <section className="page">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      <div className="details">

        <div className="details-image">

          <img
            src={product.thumbnail}
            alt={product.title}
          />

        </div>

        <div className="details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.title}
          </h1>

          <p className="rating">
            ⭐ {product.rating}
          </p>

          <h2>
            {product.price}
          </h2>

          <p>
            {product.description}
          </p>

          <p>
            Stock Available:
            {" "}
            {product.stock}
          </p>

          <button
            className="btn primary large"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          <Link
            to="/cart"
            className="btn secondary large"
          >
            View Cart
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;