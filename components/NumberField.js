import P from "./P";
import PropTypes from "prop-types";

const NumberField = ({
  number = 0,
  handleSum = () => {},
  handleRest = () => {},
}) => {
  return (
    <div className="w-full h-10 border-2 border-slate-500 text-white flex items-center justify-between">
      <div className="pl-5">
        <P>{number}</P>
      </div>
      <div className="flex w-[60px] h-full ">
        <button
          onClick={handleSum}
          className="w-[30px] h-full border-l-2 border-slate-500 flex justify-center items-center cursor-pointer hover:bg-slate-600"
        >
          +
        </button>
        <button
          onClick={handleRest}
          className="w-[30px] h-full border-l-2 border-slate-500 flex justify-center items-center cursor-pointer hover:bg-slate-600"
        >
          -
        </button>
      </div>
    </div>
  );
};

NumberField.propTypes = {
  number: PropTypes.number.isRequired,
  handleSum: PropTypes.func.isRequired,
  handleRest: PropTypes.func.isRequired,
};

export default NumberField;
