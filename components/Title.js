import PropTypes from "prop-types";

const Title = ({ children, color = "text-black" }) => {
  return <h2 className={`text-4xl font-bold ${color}`}>{children}</h2>;
};

Title.propTypes = {
  color: PropTypes.string,
};

export default Title;
