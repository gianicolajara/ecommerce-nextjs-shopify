const Subtitle = ({ children, bold = true, color = "" }) => {
  return (
    <h3 className={`text-2xl ${bold ? "font-bold" : "font-normal"} ${color}`}>
      {children}
    </h3>
  );
};

export default Subtitle;
