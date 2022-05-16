import { useState } from "react";
import Subtitle from "./Subtitle";
import { AiOutlineArrowUp } from "react-icons/ai";
import PropTypes from "prop-types";

const initialDescription = false;

const Collapsable = ({ children, title = "" }) => {
  const [openDescription, setOpenDescription] = useState(true);

  const handleOpenDescription = () => {
    setOpenDescription(true);
  };

  const handleCloseDescription = () => {
    setOpenDescription(false);
  };

  return (
    <>
      <div
        className={`border-2 p-3 border-slate-300 bg-slate-100 flex flex-col transition-[height] ease-in-out duration-200`}
        onMouseEnter={handleOpenDescription}
        onMouseLeave={handleCloseDescription}
      >
        <div className="transition ease-in-out duration-300">
          <div className="flex w-full h-[50px] justify-between items-center">
            <Subtitle bold={false}>{title}</Subtitle>
            <AiOutlineArrowUp
              size={20}
              onClick={handleOpenDescription}
              className={`${
                openDescription ? "rotate-180" : ""
              } transition-all`}
            />
          </div>
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-1000 overflow-hidden ${
          openDescription ? "h-[100%]" : "h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

Collapsable.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Collapsable;
