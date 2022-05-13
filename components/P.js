const P = ({ children, color = "text-white", bold = false }) => {
  return (
    <p className={`${color} ${bold ? "font-bold" : "font-normal"}`}>
      {children}
    </p>
  );
};

export default P;
