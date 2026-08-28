import {
  createContext,
  useContext,
  useReducer
} from "react";

const CartContext = createContext();

function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_TO_CART": {

      const existingProduct = state.find(
        item => item.id === action.payload.id
      );

      if (existingProduct) {

        return state.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ];
    }

    case "INCREASE":

      return state.map(item =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

    case "DECREASE":

      return state
        .map(item =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0);

    case "REMOVE":

      return state.filter(
        item => item.id !== action.payload
      );

    case "CLEAR":

      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {

  const [cart, dispatch] = useReducer(
    cartReducer,
    []
  );

  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}