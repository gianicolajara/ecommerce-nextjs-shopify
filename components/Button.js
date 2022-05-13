const Button = ({
  children,
  onClick,
  bg = "bg-black",
  color = "text-white",
}) => {
  return (
    <button className={`${bg} p-3 ${color} font-bold`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
