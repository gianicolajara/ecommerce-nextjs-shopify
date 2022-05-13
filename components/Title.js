const Title = ({ children, color = "text-black" }) => {
  return <h2 className={`text-4xl font-bold ${color}`}>{children}</h2>;
};

export default Title;
