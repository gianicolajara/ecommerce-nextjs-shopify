import PropTypes from "prop-types";

const Button = ({
  children,
  onClick = () => {},
  bg = "bg-black",
  color = "text-white",
}) => {
  return (
    <button className={`${bg} p-3 ${color} font-bold`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  bg: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
