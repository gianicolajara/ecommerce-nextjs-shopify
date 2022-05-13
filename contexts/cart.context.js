import { createContext, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../types/cart.actions";
import cartReducer from "../reducers/cart";

const CartContext = createContext();

const initialReducerCart = {
  cart: [],
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialReducerCart);

  const handleAddToCart = (variantSelected, quantity) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { ...variantSelected, quantity },
    });
  };

  const handleUpdateCart = (update) => {
    dispatch({ type: UPDATE_CART, payload: update });
  };

  const handleDeleteCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const value = {
    cart,
    handleAddToCart,
    handleUpdateCart,
    handleDeleteCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
export { CartContext };
