import Button from "./Button";
import OptionFormProductClothes from "./OptionFormProductClothes";
import SelectQuantityProduct from "./SelectQuantityProduct";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const FormProductClothes = ({
  product,
  variantSelected,
  sizes,
  selectedOptions,
  handleChangeOption,
  quantity,
  setQuantity,
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
        <Subtitle>{variantSelected.priceV2.amount}</Subtitle>
        <Subtitle bold={false}>
          ${variantSelected.priceV2.currencyCode}
        </Subtitle>
      </div>
      <Subtitle>Description</Subtitle>
      <p title="Description">{product.description}</p>

      <OptionFormProductClothes
        product={product}
        sizes={sizes}
        selectedOptions={selectedOptions}
        handleChangeOption={handleChangeOption}
      />
      <SelectQuantityProduct
        variantSelected={variantSelected}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="flex gap-3">
        <Button onClick={() => addToCart(variantSelected, quantity)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default FormProductClothes;
