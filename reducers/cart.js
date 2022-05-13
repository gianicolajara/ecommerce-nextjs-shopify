import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../types/cart.actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const repeatItem =
        state.cart.find((item) => item.id === action.payload.id) ?? null;
      return {
        cart: repeatItem
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: action.payload.quantity + item.quantity,
                  }
                : item
            )
          : [...state.cart, action.payload],
      };
    case UPDATE_CART:
      const itemToUpdate =
        state.cart.find((item) => item.id === action.payload.id) ?? null;

      return {
        cart: itemToUpdate
          ? state.cart.map((item) =>
              item.id === action.payload.id ? action.payload : item
            )
          : state.cart,
      };
    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
