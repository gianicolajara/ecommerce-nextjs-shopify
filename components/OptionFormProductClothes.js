import OptionClic from "./OptionClic";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";

const OptionFormProductClothes = ({
  product = {},
  selectedOptions = {},
  handleChangeOption = () => {},
  sizes = {},
}) => {
  return (
    <div className="flex flex-col gap-5">
      {product.options.map((option) => {
        return (
          <div key={option.id} className="flex flex-col gap-2">
            <Subtitle>{option.name}</Subtitle>
            <div className="flex gap-2 flex-wrap">
              {option.values.map((value) => {
                return (
                  <div key={value} className="flex">
                    {option.name === "Size" ? (
                      sizes.includes(value) && (
                        <OptionClic
                          option={option}
                          value={value}
                          selectedOptions={selectedOptions}
                          handleChangeOption={handleChangeOption}
                        />
                      )
                    ) : (
                      <OptionClic
                        option={option}
                        value={value}
                        selectedOptions={selectedOptions}
                        handleChangeOption={handleChangeOption}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

OptionFormProductClothes.propTypes = {
  product: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  handleChangeOption: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default OptionFormProductClothes;
