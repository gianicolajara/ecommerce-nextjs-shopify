import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { AiOutlineLeft } from "react-icons/ai";

const NavProducts = ({ title = "", link = "" }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <nav className="w-full h-[50px] flex items-center gap-5">
      <button onClick={handleBack}>
        <AiOutlineLeft size={20} className="cursor-pointer " />
      </button>
      {title && (
        <Link href={`/products/${link}`} passHref={true}>
          <a>{`${title}`}</a>
        </Link>
      )}
    </nav>
  );
};

NavProducts.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default NavProducts;
