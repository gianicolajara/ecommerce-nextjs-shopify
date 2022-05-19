import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import NumberField from "./NumberField";
import PropTypes from "prop-types";

const ChangeNumberProduct = ({ item = {} }) => {
  const { handleUpdateCart } = useContext(CartContext);

  const handleSum = () => {
    console.log(item.quantityAvailable);

    handleUpdateCart({
      ...item,
      quantity:
        item.quantity < item.quantityAvailable
          ? item.quantity + 1
          : item.quantityAvailable,
    });
  };

  const handleRest = () => {
    handleUpdateCart({
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : 1,
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

ChangeNumberProduct.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ChangeNumberProduct;
