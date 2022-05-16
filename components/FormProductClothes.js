import Button from "./Button";
import OptionFormProductClothes from "./OptionFormProductClothes";
import SelectQuantityProduct from "./SelectQuantityProduct";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import PropTypes from "prop-types";

const FormProductClothes = ({
  product = {},
  variantSelected = {},
  sizes = [],
  selectedOptions = [],
  handleChangeOption = () => {},
  quantity = "",
  setQuantity = () => {},
}) => {
  const { handleAddToCart } = useContext(CartContext);

  const addToCart = (variantSelected, quantity) => {
    handleAddToCart(variantSelected, quantity);
    setQuantity(0);
  };

  return (
    <div className="flex flex-col gap-5">
      <small>{product.productType}</small>
      <Title>{product.title}</Title>
      <div className="flex gap-3">
        <Subtitle bold={false}>${variantSelected.priceV2.amount}</Subtitle>
        <Subtitle>{variantSelected.priceV2.currencyCode}</Subtitle>
      </div>
      <Subtitle>Description</Subtitle>
      <p title="Description">{product.description}</p>

      <OptionFormProductClothes
        product={product}
        sizes={sizes}
        selectedOptions={selectedOptions}
        handleChangeOption={handleChangeOption}
      />
      {variantSelected.quantityAvailable === 0 ? (
        <Subtitle color="text-gray-600">Out of stock</Subtitle>
      ) : (
        <SelectQuantityProduct
          variantSelected={variantSelected}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}

      {variantSelected.quantityAvailable > 0 && (
        <div className="flex gap-3">
          <Button onClick={() => addToCart(variantSelected, quantity)}>
            Add to cart
          </Button>
        </div>
      )}
    </div>
  );
};

FormProductClothes.propTypes = {
  product: PropTypes.object.isRequired,
  variantSelected: PropTypes.object.isRequired,
  sizes: PropTypes.array.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  handleChangeOption: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default FormProductClothes;
