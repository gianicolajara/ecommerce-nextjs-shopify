import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.cart.length > 0 && (
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-red-500 rounded-full text-xs flex justify-center items-center text-white animate-bounce">
          {cart.cart.length}
        </div>
      )}
    </>
  );
};

export default Cart;
