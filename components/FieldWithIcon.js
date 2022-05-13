import { BiSearch } from "react-icons/bi";

const FieldWithIcon = ({
  type = "text",
  placeholder = "Write anything",
  value = "",
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="flex items-center w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 w-full"
        value={value}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="border-y-[1px] border-r-[1px] p-1 border-l-"
      >
        <BiSearch className="text-white" size="30" />
      </button>
    </div>
  );
};

export default FieldWithIcon;
