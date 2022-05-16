import PropTypes from "prop-types";

const P = ({ children, color = "text-white", bold = false }) => {
  return (
    <p className={`${color} ${bold ? "font-bold" : "font-normal"}`}>
      {children}
    </p>
  );
};

P.propTypes = {
  color: PropTypes.string,
  bold: PropTypes.bool,
};

export default P;
