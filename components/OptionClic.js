const OptionClic = ({ selectedOptions, handleChangeOption, option, value }) => {
  return (
    <div
      className={`${
        selectedOptions[option.name] === value
          ? "border-red-400"
          : "border-slate-600"
      } border-4 py-2 px-3 bg-black text-white cursor-pointer rounded-full`}
      onClick={() => handleChangeOption(option.name, value)}
    >
      {value}
    </div>
  );
};

export default OptionClic;
