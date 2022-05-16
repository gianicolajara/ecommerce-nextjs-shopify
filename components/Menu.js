import FieldWithIcon from "./FieldWithIcon";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import Cart from "./Cart";
import Search from "./Search";
import Link from "next/link";
import { sizes } from "../config/sizes";
const Menu = ({ handleOpen }) => {
  return (
    <div className="w-full h-auto sticky top-0 left-0 z-[50]">
      <div
        className={`h-[${sizes.menuDes}px] w-full bg-slate-900 flex justify-between items-center pl-10 pr-10 z-50 gap-5`}
      >
        <div className="flex justify-center items-center gap-4">
          <Link href="/" passHref={true}>
            <h1 className="text-white lg:text-4xl text-1xl font-bold cursor-pointer">
              E-Shopy
            </h1>
          </Link>
          <AiOutlineShoppingCart
            size={40}
            className="text-white hidden lg:flex"
          />
        </div>
        <div className="flex-grow max-w-2xl hidden lg:flex">
          <Search />
        </div>
        <div className="flex gap-4">
          <div className="relative" onClick={handleOpen}>
            <AiOutlineShoppingCart
              className="text-white cursor-pointer"
              size={30}
            />
            <Cart />
          </div>
        </div>
      </div>
      <div
        className={`flex lg:hidden h-[${sizes.menuDes}px] bg-slate-900 p-2 w-full items-center pl-10 pr-10`}
      >
        <Search />
      </div>
    </div>
  );
};

export default Menu;
