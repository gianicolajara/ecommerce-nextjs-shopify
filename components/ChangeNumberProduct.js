import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import NumberField from "./NumberField";

const ChangeNumberProduct = ({ item }) => {
  const { handleUpdateCart } = useContext(CartContext);

  const handleSum = () => {
    handleUpdateCart({
      ...item,
      quantity: item.quantity >= 0 ? item.quantity + 1 : 0,
    });
  };

  const handleRest = () => {
    handleUpdateCart({
      ...item,
      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
    });
  };

  return (
    <NumberField
      number={item.quantity}
      handleSum={handleSum}
      handleRest={handleRest}
    />
  );
};

export default ChangeNumberProduct;