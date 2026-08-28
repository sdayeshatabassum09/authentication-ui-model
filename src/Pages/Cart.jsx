import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

function Cart() {

  const {
    cart,
    dispatch,
    totalPrice
  } = useCart();

  if (cart.length === 0) {

    return (
      <section className="page empty">

        <h1>
          Your Cart is Empty
        </h1>

        <p>
          Add products to your cart
          to see them here.
        </p>

        <Link
          to="/products"
          className="btn primary"
        >
          Browse Products
        </Link>

      </section>
    );
  }

  return (
    <section className="page">

      <div className="page-heading">

        <h1>
          Shopping Cart
        </h1>

      </div>

      <div className="cart-container">

        <div>

          {cart.map(item => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  ${item.price}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      dispatch({
                        type: "DECREASE",
                        payload: item.id
                      })
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch({
                        type: "INCREASE",
                        payload: item.id
                      })
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE",
                      payload: item.id
                    })
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>

          <h3>
            Total: ${totalPrice.toFixed(2)}
          </h3>

          <button
            className="btn primary full"
            onClick={() =>
              alert(
                "Order placed successfully!"
              )
            }
          >
            Checkout
          </button>

          <button
            className="btn secondary full"
            onClick={() =>
              dispatch({
                type: "CLEAR"
              })
            }
          >
            Clear Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;