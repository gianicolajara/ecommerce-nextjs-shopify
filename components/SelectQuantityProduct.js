const SelectQuantityProduct = ({ variantSelected, quantity, setQuantity }) => {
  const handleChangeQuantity = (e) => {
    setQuantity(Number.parseInt(e.target.value));
  };

  return (
    <select
      className="border-2 border-slate-600 p-4"
      value={quantity}
      onChange={handleChangeQuantity}
    >
      <option value="0">Select a quantity</option>
      {Array.from(
        { length: variantSelected.quantityAvailable },
        (v, i) => i + 1
      ).map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>
  );
};

export default SelectQuantityProduct;
